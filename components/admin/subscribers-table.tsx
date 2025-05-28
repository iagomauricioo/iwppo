"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Download, Trash2, ToggleLeft, ToggleRight, Loader2 } from "lucide-react"
import { toggleSubscriberStatus, deleteSubscriber } from "@/src/app/actions/admin"

interface Subscriber {
  id: string
  email: string
  created_at: string
  active: boolean
}

interface SubscribersTableProps {
  subscribers: Subscriber[]
  onUpdate: () => void
}

export function SubscribersTable({ subscribers, onUpdate }: SubscribersTableProps) {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    setLoadingStates((prev) => ({ ...prev, [id]: true }))

    try {
      const result = await toggleSubscriberStatus(id, !currentStatus)
      if (result.success) {
        onUpdate()
      }
    } catch (error) {
      console.error("Erro ao alterar status:", error)
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }))
    }
  }

  const handleDelete = async (id: string) => {
    setLoadingStates((prev) => ({ ...prev, [id]: true }))

    try {
      const result = await deleteSubscriber(id)
      if (result.success) {
        onUpdate()
      }
    } catch (error) {
      console.error("Erro ao deletar:", error)
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }))
    }
  }

  const exportToCSV = () => {
    const csvContent = [
      ["Email", "Status", "Data de Inscrição"],
      ...subscribers.map((sub) => [
        sub.email,
        sub.active ? "Ativo" : "Inativo",
        new Date(sub.created_at).toLocaleDateString("pt-BR"),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `newsletter-subscribers-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const exportToJSON = () => {
    const jsonContent = JSON.stringify(subscribers, null, 2)
    const blob = new Blob([jsonContent], { type: "application/json" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `newsletter-subscribers-${new Date().toISOString().split("T")[0]}.json`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle>Inscritos da Newsletter ({subscribers.length})</CardTitle>
          <div className="flex gap-2">
            <Button onClick={exportToCSV} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar CSV
            </Button>
            <Button onClick={exportToJSON} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar JSON
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data de Inscrição</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscribers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                    Nenhum inscrito encontrado
                  </TableCell>
                </TableRow>
              ) : (
                subscribers.map((subscriber) => (
                  <TableRow key={subscriber.id}>
                    <TableCell className="font-medium">{subscriber.email}</TableCell>
                    <TableCell>
                      <Badge variant={subscriber.active ? "default" : "secondary"}>
                        {subscriber.active ? "Ativo" : "Inativo"}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(subscriber.created_at).toLocaleDateString("pt-BR")}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleToggleStatus(subscriber.id, subscriber.active)}
                          disabled={loadingStates[subscriber.id]}
                        >
                          {loadingStates[subscriber.id] ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : subscriber.active ? (
                            <ToggleRight className="h-4 w-4" />
                          ) : (
                            <ToggleLeft className="h-4 w-4" />
                          )}
                        </Button>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" disabled={loadingStates[subscriber.id]}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                              <AlertDialogDescription>
                                Tem certeza que deseja remover o email <strong>{subscriber.email}</strong> da
                                newsletter? Esta ação não pode ser desfeita.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(subscriber.id)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Excluir
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Edit, Trash2, Eye, Upload } from "lucide-react"

export default function ContentManager() {
  const [searchTerm, setSearchTerm] = useState("")

  const content = [
    {
      id: 1,
      title: "Lakers vs Warriors - Game Highlights",
      type: "Highlight",
      sport: "Basketball",
      views: "125K",
      duration: "8:45",
      status: "Published",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "NFL Championship Game",
      type: "Live Stream",
      sport: "Football",
      views: "2.1M",
      duration: "3:24:12",
      status: "Live",
      date: "2024-01-14",
    },
    {
      id: 3,
      title: "Soccer World Cup Final",
      type: "VOD",
      sport: "Soccer",
      views: "890K",
      duration: "2:15:30",
      status: "Published",
      date: "2024-01-13",
    },
    {
      id: 4,
      title: "Tennis Grand Slam Highlights",
      type: "Highlight",
      sport: "Tennis",
      views: "67K",
      duration: "12:20",
      status: "Draft",
      date: "2024-01-12",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-red-600 text-white"
      case "Published":
        return "bg-green-600 text-white"
      case "Draft":
        return "bg-yellow-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-red-600 hover:bg-red-700">
            <Upload className="w-4 h-4 mr-2" />
            Upload Video
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Stream
          </Button>
        </div>
      </div>

      {/* Content Table */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Content Library</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-300">Title</TableHead>
                <TableHead className="text-gray-300">Type</TableHead>
                <TableHead className="text-gray-300">Sport</TableHead>
                <TableHead className="text-gray-300">Views</TableHead>
                <TableHead className="text-gray-300">Duration</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {content.map((item) => (
                <TableRow key={item.id} className="border-gray-700">
                  <TableCell className="text-white font-medium">{item.title}</TableCell>
                  <TableCell className="text-gray-300">{item.type}</TableCell>
                  <TableCell className="text-gray-300">{item.sport}</TableCell>
                  <TableCell className="text-gray-300">{item.views}</TableCell>
                  <TableCell className="text-gray-300">{item.duration}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

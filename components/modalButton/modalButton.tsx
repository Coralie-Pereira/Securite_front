import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

export function ModalButton() {
  const [parkingSpaces, setParkingSpaces] = useState(5000); // Initialiser le nombre de places de parking à 5000

  const handleValidation = () => {
    if (parkingSpaces > 0) {
      setParkingSpaces((prevSpaces) => prevSpaces - 1); // diminuer le nombre de places disponibles de 1
      console.log(
        "Demande de place de parking validée. Places restantes :",
        parkingSpaces - 1
      );
    } else {
      console.log("Plus de places disponibles dans le parking.");
      // Gérer le cas où il n'y a plus de places disponibles
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Validation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Validation</DialogTitle>
          <DialogDescription>Choisir l'état de la demande </DialogDescription>
        </DialogHeader>

        <div className="flex gap-4 py-4 w-full">
          <div className=" items-center gap-4 w-full">
            <Select>
              <SelectTrigger className="w-[100%]  bg-white  rounded-sm  border-2 border-gray-300">
                <SelectValue
                  placeholder="Toutes les catégories"
                  className="text-white w-[50%]"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">Valider</SelectItem>
                  <SelectItem value="2">Refuser</SelectItem>
                  <SelectItem value="3">Supprimer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleValidation} type="submit">
            Sauvegarder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

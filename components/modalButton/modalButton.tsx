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

export function ModalButton() {
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

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Select>
              <SelectTrigger className="w-[20%]  bg-white  rounded-sm  border-2 border-gray-300">
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
          <Button type="submit">Sauvegarder</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

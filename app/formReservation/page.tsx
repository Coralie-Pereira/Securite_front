import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <form>
        <div className="h-[1150px] flex justify-center">
          <div className="h-[1150px] w-[60%] mt-3 border-2 border-gray-200  relative bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 transition duration-200 ease-in-out hover:shadow-xl">
            {/* 2eme partie */}

            <div className="mt-3 p-2  ml-5 text-white">
              Mes informations personnelles
            </div>

            <div className="flex  items-center  justify-around mt-5">
              <div className="text-white">Nom</div>
              <div className="w-[50%] flex mr-2">
                <Input required placeholder="Nom" name="nom"></Input>
              </div>
            </div>
            <div className="flex  items-center   justify-around mt-6">
              <div className="text-white">Prénom</div>
              <div className="w-[50%] flex mr-4">
                <Input required placeholder="Prénom" name="prenom"></Input>
              </div>
            </div>
            <div className="flex  items-center  justify-around  mt-6 ">
              <div className="text-white">Date de naissance</div>
              <div className="w-[50%] flex mr-10">
                <Input
                  required
                  type="date"
                  placeholder="JJ/MM/AA"
                  name="dateNaissance"
                ></Input>
              </div>
            </div>
            <div className="bg-white flex justify-center self-center ml-14 h-px w-[90%] pl-8 mt-7"></div>

            {/* 3EME PARTIE */}
            <div className="mt-3 p-2  ml-5 text-white">Mon adresse</div>
            <div className="flex justify-around mt-5 gap-3 p-2">
              <div className="text-white">Ville *</div>
              <Input
                required
                className="w-[50%]"
                name="ville"
                placeholder="Ville"
              ></Input>
            </div>
            <div className="flex  items-center justify-around  mt-6 ">
              <div className="text-white">Adresse du domicile *</div>
              <div className="w-[50%] flex mr-10">
                <Input
                  required
                  name="adresse"
                  placeholder="Adresse du domicile"
                ></Input>
              </div>
            </div>
            <div className="flex  items-center justify-around  mt-6 ">
              <div className="text-white">Complement d&apos;adresse</div>
              <div className="w-[50%] flex mr-10">
                <Input
                  required
                  name="complementAdresse"
                  placeholder="Complement d'adresse"
                ></Input>
              </div>
            </div>

            <div className="flex  items-center justify-around  mt-6 ">
              <div className="text-white">Code postal</div>
              <div className="w-[50%] flex  mr-3">
                <Input
                  required
                  name="codePostal"
                  placeholder="Code postal"
                ></Input>
              </div>
            </div>

            <div className="flex  items-center justify-around  mt-6 ">
              <div className="text-white">Numero telephone</div>
              <div className="w-[50%] ml-10 flex mr-10">
                <Input
                  required
                  name="numTel"
                  placeholder="Numero de telephone"
                ></Input>
              </div>
            </div>

            {/* 4EME PARTIE */}
            <div className="bg-white flex justify-center ml-14 self-center h-px w-[90%] pl-8 mt-7"></div>
            <div className="mt-3 p-2 ml-5 text-white">Arrivé / Départ</div>

            <div className="flex  items-center justify-around  mt-10 ">
              <div className="text-white">Date d'arrivé</div>
              <div className="w-[50%] flex mr-10">
                <Input
                  required
                  type="date"
                  placeholder="JJ/MM/AA"
                  name="dateAriiver"
                ></Input>
              </div>
            </div>

            <div className="flex  items-center justify-around  mt-10 ">
              <div className="text-white">Date de depart</div>
              <div className="w-[50%] flex mr-10">
                <Input
                  required
                  type="date"
                  placeholder="JJ/MM/AA"
                  name="dateDepart"
                ></Input>
              </div>
            </div>

            <div className="flex justify-center mt-7">
              <Button
                type="submit"
                className=" border-2 border-gray-400 h-11 w-36 mt-8 bg-white text-black p-5 hover:bg-slate-200 "
              >
                Valider
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default page;

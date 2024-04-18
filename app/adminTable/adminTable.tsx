import { modalButton } from "@/components/modalButton/modalButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { generateRandomData } from "./page";

export const adminTable = () => {
  // Générer des données aléatoires pour chaque ligne
  const rowData = generateRandomData();

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Prénom
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nom
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date de naissance
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ville
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Adresse du domicile
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Code postal
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Numéro de téléphone
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date d'arrivée
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date de départ
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Validation
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{rowData.firstName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{rowData.lastName}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {rowData.dateOfBirth}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{rowData.city}</td>
            <td className="px-6 py-4 whitespace-nowrap">{rowData.address}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {rowData.postalCode}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {rowData.phoneNumber}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {rowData.arrivalDate}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {rowData.departureDate}
            </td>
            <td className="px-6 py-4 whitespace-nowrap flex gap-3 flex-col">
              <div>
                <Input></Input>
              </div>
              <div>
                <Button
                  onClick={modalButton()}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Valider
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

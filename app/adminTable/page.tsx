"use client";

import { ModalButton } from "@/components/modalButton/modalButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const generateRandomData = () => {
  // Générer des données aléatoires pour chaque colonne
  const randomFirstName = "John";
  const randomLastName = "Doe";
  const randomDateOfBirth = "1990-01-01";
  const randomCity = "New York";
  const randomAddress = "123 Main St";
  const randomPostalCode = "10001";
  const randomPhoneNumber = "555-1234";
  const randomArrivalDate = "2024-04-18";
  const randomDepartureDate = "2024-04-25";

  return {
    firstName: randomFirstName,
    lastName: randomLastName,
    dateOfBirth: randomDateOfBirth,
    city: randomCity,
    address: randomAddress,
    postalCode: randomPostalCode,
    phoneNumber: randomPhoneNumber,
    arrivalDate: randomArrivalDate,
    departureDate: randomDepartureDate,
  };
};

const adminTable = () => {
  // Générer des données aléatoires pour chaque ligne
  const rowData = generateRandomData();
  //   const [boolean, setBoolean] = useState(false);

  return (
    <div className="container mx-auto">
      {/* {boolean == true ? <ModalButton /> : null} */}
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
                {/* <Button
                  onClick={() => {
                    setBoolean(!boolean);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Valider
                </Button> */}
                <ModalButton></ModalButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default adminTable;

# tmbrug - Open/dicht status van een brug in Nederland via een API
Status Termeerbrug

# Om vanuit Home Assistant de status van de brug zichtbaar te maken:

Voeg het volgende aan configuration.yaml toe:

    - resource: https://www.vaarweginformatie.nl/frp/api/geodynamic/bridge/details/?isrs=NLMSS002270445300084
      method: GET
      scan_interval: 30
      binary_sensor:
        - name: "Termeerbrug Open"
          unique_id: "termeerbrug_open"
          icon: "mdi:bridge"
          device_class: opening
          value_template: "{{ value_json.bridgeStatus.status == 'OPEN' }}"

De brug-ID (na "isrs=" in de URL) en de naamgeving kun je aanpassen aan de brug die je interesseert.

# Hoe de ID van jouw brug te vinden

Ga naar https://www.vaarweginformatie.nl/frp/main/#/geo/map?layers=BRIDGE en vind je brug op de kaart.
Klik op het icoon van de brug om informatie over de brug te zien. Klik dan op de blauwe knop "Bekijk details".
De ISRS-referentie staat in het eerste deel van de informatie, aan de rechter kant.

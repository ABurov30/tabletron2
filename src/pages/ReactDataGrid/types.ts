export interface Row {
  code: string;
  id: string;
  scheduledFrom: string;
  scheduledUntil: string;
  warehouse: {
    id: string;
    code: string;
  };
  vehicleNumber: string;
  yardLocation: {
    id: string;
    code: string;
  };
  route: {
    id: string;
    code: string;
  };
  current: boolean;
  closed: boolean;
  type: 'Appointment' | 'NotAppointment';
}

export interface IApointment {
  number?: number;
  id: string;
  code: string;
  scheduledFrom: number;
  scheduledUntil: number;
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
  _children?: IApointment[];
}

export interface IDefaultData {
  content: IApointment[];
  pageable: {
    sort: [];
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: [];
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

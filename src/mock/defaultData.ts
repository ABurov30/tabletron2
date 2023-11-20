import { v4 as uuidv4 } from 'uuid';
import { IApointment, IDefaultData } from './types';

export const obj: IApointment = {
  number: 0,
  id: uuidv4(),
  code: 'mock',
  scheduledFrom: Date.now(),
  scheduledUntil: Date.now(),
  warehouse: {
    id: uuidv4(),
    code: 'mock',
  },
  vehicleNumber: '123',
  yardLocation: {
    id: uuidv4(),
    code: 'mock',
  },
  route: {
    id: uuidv4(),
    code: 'mock',
  },
  current: true,
  closed: false,
  type: 'Appointment',
  _children: [
    {

      id: uuidv4(),
      code: 'mockDaughter',
      scheduledFrom: Date.now(),
      scheduledUntil: Date.now(),
      warehouse: {
        id: uuidv4(),
        code: 'mock',
      },
      vehicleNumber: '123',
      yardLocation: {
        id: uuidv4(),
        code: 'mock',
      },
      route: {
        id: uuidv4(),
        code: 'mock',
      },
      current: true,
      closed: false,
      type: 'Appointment',
    },
    {
      id: uuidv4(),
      code: 'mockDaughter1',
      scheduledFrom: Date.now(),
      scheduledUntil: Date.now(),
      warehouse: {
        id: uuidv4(),
        code: 'mock',
      },
      vehicleNumber: '123',
      yardLocation: {
        id: uuidv4(),
        code: 'mock',
      },
      route: {
        id: uuidv4(),
        code: 'mock',
      },
      current: true,
      closed: false,
      type: 'Appointment',
    },
  ],
};

const max = 100;

const defaultData: IDefaultData = {
  content: Array(20)
    .fill(obj)
    .map((_, i) => {
      const el = { ..._ };
      el.number = i;
      el.id = uuidv4();
      el.code = `appointment${Math.floor(Math.random() * max)}`;
      el.warehouse = {
        id: uuidv4(),
        code: `warehouse${Math.floor(Math.random() * max)}`,
      };
      el.route = {
        id: uuidv4(),
        code: `route${Math.floor(Math.random() * max)}`,
      };
      el.yardLocation = {
        id: uuidv4(),
        code: `yardLocation${Math.floor(Math.random() * max)}`,
      };
      el.vehicleNumber = Math.floor(Math.random() * max);
      el.scheduledFrom = '10/10/1982';
      el.scheduledUntil = '10/10/1982';
      el.closed = Math.random() < 0.5;
      el.current = Math.random() < 0.5;
      el.type = Math.random() < 0.5 ? 'Appointment' : 'NotAppointment';
      return el;
    }),
  pageable: {
    sort: [],
    offset: 0,
    pageNumber: 0,
    pageSize: 500,
    paged: true,
    unpaged: false,
  },
  totalElements: 2,
  totalPages: 1,
  last: true,
  size: 500,
  number: 0,
  sort: [],
  numberOfElements: 2,
  first: true,
  empty: false,
};

export default defaultData;

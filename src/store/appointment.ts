import { makeAutoObservable, toJS } from 'mobx';
import { IApointment, IDefaultData } from '../mock/types';

class Appointment {
  data: IApointment[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  public setData(state: IDefaultData) {
    this.data = state.content;
  }
  public addAppointment(row: IApointment) {
    const newData = [row, ...this.data];
    this.data = newData;
  }
  public removeAppointment(row: IApointment) {
    const newData = this.data.filter(
      (appointment) => appointment.id !== row.id
    );
    this.data = newData;
  }
  public updateAppointment(row: IApointment) {
    const newData = this.data.map((appointment) => {
      return toJS(toJS(appointment)?.id === row?.id ? row : appointment);
    });
    this.data = newData;
  }
}

export default new Appointment();

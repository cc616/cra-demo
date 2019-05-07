import { observable, action } from 'mobx'

class HomeStore {
  @observable number = 0

  @action increase = () => {
    this.number += 1
  }

  @action decrease = () => {
    this.number -= 1
  }
}

export default new HomeStore()

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  dashboard = null;

  @action move(event, position) {
    console.log(event)
    console.log(position)

    // this.widget.save()
  }
}

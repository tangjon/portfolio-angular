export class PortfolioItem {
  project_name: string;
  image_link: string;
  project_date: string;
  item_id: string;
  description: string;
  lifeCycle: string;
  client: string;
  application_type: string;

  constructor(project_name, image_link, project_date, item_id, client, application_type, life_cycle) {
    this.project_name = project_name;
    this.image_link = image_link;
    this.project_date = project_date;
    this.item_id = item_id;
    this.client = client;
    this.application_type = application_type;
    this.lifeCycle = life_cycle;
  }

  addDescription(description): void {
    this.description = description;
  }
}

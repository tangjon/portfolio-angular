export class PortfolioItem {
  project_name: string;
  image_link: string;
  project_date: string;

  constructor(project_name, image_link, project_date) {
    this.project_name = project_name;
    this.image_link = image_link;
    this.project_date = project_date;
  }
}

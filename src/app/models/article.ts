export class Article {

  private _theme: string;

  private _title: string;

  private _url: string;

  private _urlToImage: string;

  private _author: string;

  private _description: string;

  private _source: string;


  private _videoURL: string;


  constructor(theme: string, title: string, fromSource: string, url:string,author:string,desc:string, imgURL?: string, videoURL?: string){
    this._theme = theme;
    this._title = title;
    this._source = fromSource;
    this._url = url;
    this._author= author;
    this._description=desc;

    if(imgURL){
      this._urlToImage = imgURL;
    }
    if(videoURL){
      this._videoURL = videoURL;
    }
  }

  public get theme(): string {
    return this._theme;
  }
  public set theme(value: string) {
    this._theme = value;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

  public get urlToImage(): string {
    return this._urlToImage;
  }
  public set urlToImage(value: string) {
    this._urlToImage = value;
  }

  public get author(): string {
    return this._author;
  }
  public set author(value: string) {
    this._author = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get source(): string {
    return this._source;
  }
  public set source(value: string) {
    this._source = value;
  }

  public get videoURL(): string {
    return this._videoURL;
  }
  public set videoURL(value: string) {
    this._videoURL = value;
  }

}

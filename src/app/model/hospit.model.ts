export class Hospitalisation {
	dataChrt:number;
idHosp:number;
nomServices:string;
nombreGuerris:number;
nombreReferes: number;
nombreDeces: number;
nombreChambre : number;
nombreLits : number;
nombreConsul: number;
dateDebutHosp: Date;
dateFinHosp:Date;


constructor(){
	this.dataChrt=0;

	this.idHosp = 0;
	this.nomServices="";
	this.nombreGuerris=0;
	this.nombreReferes=0;
	this.nombreDeces=0;
	this.nombreChambre=0;
	this.nombreLits=0;
	this.nombreConsul=0;
	this.dateDebutHosp=null;
    this.dateFinHosp=null;
}
}
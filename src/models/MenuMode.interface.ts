export interface MenuModelInterface {
	label?: string;
	icon?: string;
  url?:string;
	to?: string;
	separator?: any;
	disabled?: any;
	style?: string;
	target?: string;
	badge?: any;
  class?:any
	items?: MenuModelInterface[];
}

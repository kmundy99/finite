export class Hero {
  id: number;
  name: string
}	

export class IntegrationSteps {
  id: number;
  StepNumber: number;
  Type: string
}	

export class RestApi {
	id: number;
	Url: string;
	Username: string;
	Password: string}
	
export class Field {
	id: number;
	ReferenceStep: number;
	ReferenceFieldId: number;
	Label: string;
	Const: string;
	Value: string
	}
	
export class Excel {
	id: number;
	IpAddress: string;
	Username: string;
	Password: string;
	DirPath: string;
	MoveToPath: string;
	Filename: string}
	

	
export class Condition {
	id: number;
	Field1: [Field];
	Condition: string;
	Field2: [Field];
	AndOr: string
}
	
	
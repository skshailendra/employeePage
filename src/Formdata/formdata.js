const employeeFormData ={
    name: {
        elementType : 'input',
        elementConfig: {
        type: 'text',
        valuetype:'Employee Name',
        placeholder:'Employee Name'
        },
        value: '',
        validation:{
            required:true
        },
        valid:false,
        touched:false
    },
    oracleId: {
        elementType : 'input',
        elementConfig: {
        type: 'text',
        valuetype:'OracleId',
        placeholder:'Oracle Id'
        },
        value: '',
        validation:{
            required:true
        },
        valid:false,
        touched:false
    },
    skillSet:{
        elementType : 'select',
        elementConfig: {
        valuetype:'Skill Set',
        options:[
            {value:'ReactJs',displayValue:'ReactJs'},
            {value:'AngularJS',displayValue:'AngularJS'},
            {value:'Java',displayValue:'Java'}
        ]
        },
        value: '',
        valid:true        
    },
    location:{
        elementType : 'radio',
        elementConfig: {
        valuetype:'Location',
        options:[
            {value:'Gurgaon',displayValue:'Gurgaon'},
            {value:'Bangalore',displayValue:'Bangalore'}
        ]
        },
        value: '',
        validation:{
            required:true
        },
        valid:false,
        touched:false
    }
}

export default employeeFormData;
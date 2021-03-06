var chart = c3.generate({
    bindto: '#chartPEM_Salud',
    data: {
      x: 'x',
      columns: [
        ['x','Sostenible','Eco-turismo','Peor'],
        
        ['Área de hábitat del mosquito (ha)',-17251,-16701, 39358 ],
        //['Área de hábitat del mosquito (ha) [Seco]', -32575,-32535, 14646],

        ['Población en areas con Aedes',  97531 , 97459 ,101055],
        //['Incremento % población en riesgo [Seco]', 4,4,6],
        
      ],
      axes: {
        //'Área de hábitat del mosquito (ha) [Seco]': 'y2',
        'Área de hábitat del mosquito (ha)': 'y2'
      },
      type:'bar',
      colors: {
        //'Área de hábitat del mosquito (ha) [Seco]': '#c970cc',
        'Área de hábitat del mosquito (ha)':'#c970cc',
        'Población en areas con Aedes':'#f7b981',
        //'Incremento % población en riesgo [Lluvioso]':'darkred'
      },
    },
    legend: {
        position: 'inner-bottom'
    },
    axis: {
      x:{
        type : 'category',
      },
      y: {
        max: 10000,
        min: -10000,
        label: { 
          text: 'Población en riesgo',
          position: 'outer-middle'
        }
      },
      y2: {
        show: true, 
        max: 37000,
        min: -37000,
        label: { 
          text: 'Área de hábitat (ha)' ,// (Mt Sedimentos)',
          position: 'outer-middle' 
        },
      }
    }
});


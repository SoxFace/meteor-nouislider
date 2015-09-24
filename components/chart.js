if (Meteor.isClient) {

  /*
   * Function to draw the column chart
   */
  function builtColumn() {

      $('#container-column').highcharts({
          
          chart: {
              type: 'scatter',
              inverted: true
          },
          
          title: {
              text: 'Comparing Awareness as a Doctor & Patient'
          },
          
          subtitle: {
              text: 'Source: Pam McClean Center'
          },
          
          credits: {
              enabled: false
          },
          
          xAxis: {
              categories: [
                  'Clarity',
                  'Bias',
                  'Comfort',
                  'Structure'
              ]
          },
          
          yAxis: {
              min: 0,
              max: 100,
              title: {
                  text: 'Score: 0 to 100'
              },
              gridLineWidth: 0,
              minorGridLineWidth: 0
          },
          
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
          },
          
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },
          
          series: [{
              name: 'As a Doctor',
              data: [49.9, 71.5, 65, 100]

          }, {
              name: 'As a Patient',
              data: [83.6, 78.8, 98.5, 93.4]

          }]
      });
  }

  /*
   * Call the function to built the chart when the template is rendered
   */
  Template.columnDemo.rendered = function() {    
      builtColumn();
  }
};

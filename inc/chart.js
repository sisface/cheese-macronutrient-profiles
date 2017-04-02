var calories = ['kJ', 1254, 1396, 1538, 1542, 1193];
var protein = ['protéines (grammes)', 19.8, 20.8, 23.4, 21.5, 17.9];
var fat = ['lipides (grammes)', 24.3, 27.7, 30, 30.6, 21.4];
var carbohydrates = ['glucides (grammes)', .5, .5, 1.1, 2, 3.6];

function showChart(macro) { 
    c3.generate({
        data: {
            columns: [macro],
            type: 'bar',
            colors: {
                'kJ': '#0000ff',
                'protéines (grammes)': '#e60000',
                'lipides (grammes)': '#ff9900',
                'glucides (grammes)': '#009933'        
            },             
        },
        bar: {           
            width: {
                ratio: 0.5
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['carembert', 'brie de meaux', 'munster', 'roquefort', 'chèvre'],
                label: {
                    text: 'fromage',
                    position: 'outer-left',
               }
            },
            y: {
                label: {
                    text: macro[0],
                    position: 'outer-top'
                }
            }
        }
    });
}

showChart(calories);
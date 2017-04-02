var calories = ['calories', 403, 380, 375, 353, 300];
var protein = ['protein (grams)', 24.9, 26.9, 22.2, 21.4, 22.2];
var fat = ['fat (grams)', 33.1, 27.8, 31.3, 28.7, 22.4];
var carbohydrates = ['carbohydrates (grams)', 1.3, 5.4, 1.6, 2.3, 2.2];

function showChart(macro) { 
    c3.generate({
        data: {
            columns: [macro],
            type: 'bar',
            colors: {
                'calories': '#0000ff',
                'protein (grams)': '#e60000',
                'fat (grams)': '#ff9900',
                'carbohydrates (grams)': '#009933'        
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
                categories: ['cheddar', 'swiss', 'american', 'bleu', 'gorgombert'],
                label: {
                    text: 'cheese',
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
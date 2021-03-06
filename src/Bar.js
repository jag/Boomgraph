// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Boomgraph - Bar.js                                                 │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2012 Antoine Guiral (http://twitter.com/antoineguiral) │ \\
// │ Copyright © 2012 Retent.io (http://retent.io)                      │ \\
// │ http://github.com/retentio/boomgraph                               │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ For the full copyright and license information,                    | \\
// | please view the LICENSE file that was distributed                  | \\
// | with this source code.                                             │ \\
// └────────────────────────────────────────────────────────────────────┘ \\

var Bar = function Bar(options){
    
    var choopy=new Choopy(options);
    
    choopy.options.grid.y.startAt=0;
    
    choopy.parse();
    choopy.normalize();
    choopy.initDraw();
    choopy.drawGrid();
    
    var howToScale=function(i,j){
        return{
            xScale:choopy.draw.coord.scale.x.step/(choopy.data.countSerie + .5),
            xFactor:i+j*(choopy.data.countSerie+.5)
        };
    }
    
    var serie;
    for (var i=0,ii=choopy.data.countSerie; i<ii ; i++){
        //we pick a color form the options
        var currentColor=choopy.options.color.serie[i%choopy.options.color.serie.length];
        serie=choopy.drawColumns(i,currentColor,howToScale);
        serie.toFront();
        choopy.draw.sets.series.push(serie);
    }
    for (var i=0,ii=choopy.draw.sets.series.length; i<ii ; i++){
        choopy.hover(choopy.draw.sets.series[i]);
    }
};
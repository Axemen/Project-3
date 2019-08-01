var margin = { top: 120, right: 120, bottom: 10, left: 120 };


var svg = d3.select("svg.dend"),
   
    width = 500 + margin.left + margin.right,
    height = 600 + margin.top + margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + (width / 2 + 100) + "," + (height / 2 + 90) + ")");

var stratify = d3.stratify()
    .parentId(function (d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

var tree = d3.tree()
    .size([360, 350])
    .separation(function (a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });


d3.csv("../static/data/styles.csv", function (data) {

    var root = tree(stratify(data));

 

    var link = g.selectAll(".link")
        .data(root.descendants().slice(1))
        .enter().append("path")
        .attr("class", "link")
        .attr("d", function (d) {
            return "M" + project(d.x, d.y)
                + "C" + project(d.x, (d.y + d.parent.y) / 2)
                + " " + project(d.parent.x, (d.y + d.parent.y) / 2)
                + " " + project(d.parent.x, d.parent.y);
        });

    var node = g.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", function (d) { return "node" + (d.children ? " node--internal" : (" node--leaf")) })
        .attr("transform", function (d) { return "translate(" + project(d.x, d.y) + ")"; })
        .on("click", click)
        ;

    node
    .append("circle")
        .attr("r", 4);
      


    node.append("text")
        .attr("dy", ".31em")
        .attr("x", function (d) { return d.x < 180 === !d.children ? 6 : -6; })
        .attr("style", "font-size: 16px; word-wrap: break-word; color: red")
        // .attr("class", "node_text")

        // .attr("class", function (d) {return "node_text "+ String(d.id.substring(d.id.indexOf(".")+1)  )})
        .attr("class", function (d) { return d.id.substring(d.id.lastIndexOf(".") + 1); })

        .style("text-anchor", function (d) { return d.x < 180 === !d.children ? "start" : "end"; })
        .attr("transform", function (d) { return "rotate(" + (d.x < 180 ? d.x - 90 : d.x + 90) + ")"; })
        .text(function (d) { return d.id.substring(d.id.lastIndexOf(".") + 1); })
        ;




});


function project(x, y) {
    var angle = (x - 90) / 180 * Math.PI, radius = y;
    return [radius * Math.cos(angle), radius * Math.sin(angle)];
}

function click(d) {
   
    styles = ["oak", "vanilla", "sherry", "fruit", "sweet", "old", "smoke", "chocolate", "malt", "casks", "cinnamon", "maple", "like", "hot", "honey", "bourbon", "pepper", "flavor", "caramel", "corn", "spice", "leather", "peat", "orange", "spices", "apple", "blend", "toffee", "grain", "fruits", "water", "japanese", "light", "rye", "canadian", "hints", "still", "mint", "white", "fresh", "wheat", "clean"];
    var item = d3.select(this).selectAll("text").text();

    if (styles.includes(item)) {
      
        d3.selectAll(".oak").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".vanilla").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".sherry").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".fruit").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".sweet").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".old").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".smoke").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".chocolate").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".malt").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".casks").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".cinnamon").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".like").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".maple").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".hot").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".honey").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".bourbon").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".pepper").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".flavor").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".caramel").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".spice").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".corn").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".leather").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".peat").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".orange").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".spices").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".apple").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".blend").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".toffee").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".grain").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".fruits").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".water").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".japanese").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".light").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".rye").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".canadian").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".hints").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".still").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".mint").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".white").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".fresh").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".wheat").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".clean").style("opacity", 0.15).style("font-weight", "normal").style("fill","black");
        d3.selectAll("." + item).style("opacity", 1).style("font-weight", "bold").style("fill","steelblue");
    } 
    else {
        d3.selectAll(".oak").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".vanilla").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".sherry").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".fruit").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".sweet").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".old").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".smoke").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".chocolate").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".malt").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".casks").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".cinnamon").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".like").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".maple").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".hot").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".honey").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".bourbon").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".pepper").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".flavor").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".caramel").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".spice").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".corn").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".leather").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".peat").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".orange").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".spices").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".apple").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".blend").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".toffee").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".grain").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".fruits").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".water").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".japanese").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".light").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".rye").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".canadian").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".hints").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".still").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".mint").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".white").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".fresh").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".wheat").style("opacity", 1).style("font-weight", "normal").style("fill","black");
        d3.selectAll(".clean").style("opacity", 1).style("font-weight", "normal").style("fill","black");
    }
}



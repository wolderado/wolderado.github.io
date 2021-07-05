let projects = [];

var locked = false;
var selectedFilter = "All";
var lastClickedElement;


function InitializeProjects()
{
    projects.push(new Project("RedFrontier2", new Array('All','Highlight','Steam','Game','FPS','Horror','3D')));
    
    projects.push(new Project("Corpoct", new Array('All','Highlight','Steam','Game','Strategy','2D','Rogue-lite','Procedural-Gen')));
    
    projects.push(new Project("TinyApocalypse", new Array('All','Game','FPS','3D','OtherEngine','Procedural-Gen','Jam Game','Pixel Art','Tense','Rogue-lite','Solo')));
    
    projects.push(new Project("AudioRunner", new Array('All','Game','2D','Casual','School Project','High-score')));
    
    projects.push(new Project("MonstrousFlavours", new Array('All','Game','3D','Story','School Project','VR','First Person')));
    
    projects.push(new Project("BattleCityInfinite", new Array('All','Game','School Project','Casual','Solo','High-score','Procedural-Gen','Rogue-lite','3D','OtherEngine')));
        
    projects.push(new Project("FlickWest", new Array('All','Game','School Project','Jam Game','Casual','Solo','3D','Multiplayer')));
    
    projects.push(new Project("City-Defenders", new Array('All','Game','FPS','3D','Strategy','VR','Procedural-Gen','School Project')));
    
    projects.push(new Project("LizardGen", new Array('All','Game','FPS','3D','Experimental','Procedural-Gen','Jam Game','Casual','Solo')));
    
    projects.push(new Project("WhoTookMyWheels", new Array('All','Jam Game','3D','Game','Procedural-Gen','High-score','Solo')));
    
    projects.push(new Project("DoubleMe", new Array('All','Jam Game','Procedural-Gen','Highlight','3D','FPS','Rogue-lite','High-score','Pixel Art','Game','Horror','Solo','School Project')));
    
    projects.push(new Project("Hellblaze", new Array('All','Jam Game','2D','High-score','Pixel Art','Game','WebGL','Solo','Casual')));
    
    projects.push(new Project("Ancestry", new Array('All','Jam Game','2D','High-score','Pixel Art','Game','WebGL','Casual')));
    
    projects.push(new Project("SwordsAndDragons", new Array('All','3D','Highlight','Game','FPS','Strategy','Procedural-Gen','Story','Voxel')));
    
    projects.push(new Project("SilentQuest", new Array('All','2D','Game','Casual','Story','WebGL','Solo','Jam Game')));
    
    projects.push(new Project("BigCrunch", new Array('All','3D','Game','Casual','FPS','WebGL','Solo','Jam Game','Procedural-Gen','High-score','Voxel')));
    
    projects.push(new Project("Pamu", new Array('All','3D','Game','FPS','Jam Game','High-score')));
    
    projects.push(new Project("Marslag", new Array('All','2D','Game','Jam Game','Solo','Pixel Art','Procedural-Gen','High-score','Casual','WebGL')));
    
    projects.push(new Project("Maryo", new Array('All','2D','Game','Jam Game','Pixel Art','WebGL','Story')));
    
    projects.push(new Project("HardTank", new Array('All','2D','Game','Jam Game','Pixel Art','WebGL','Solo','Procedural-Gen','High-score','Rogue-lite','Casual')));
    
    projects.push(new Project("UndermineDefense", new Array('All','2D','Game','Jam Game','Pixel Art','WebGL','Solo','Procedural-Gen','Rogue-lite','High-score')));
    
    projects.push(new Project("RedFrontier", new Array('All','Game','Highlight','FPS','Horror','3D','Jam Game','Pixel Art','Story')));
    
    projects.push(new Project("Universia", new Array('All','Game','Highlight','FPS','3D','Experimental','Procedural-Gen','Jam Game','Casual','Solo')));
    
    projects.push(new Project("Unhuman", new Array('All','Game','FPS','3D','Jam Game','Horror','Pixel Art','Solo','Story')));
    
    projects.push(new Project("MinorAlternativeDestroyer", new Array('All','Game','2D','Jam Game','Pixel Art','Solo','Casual','High-score','WebGL')));
    
    projects.push(new Project("Vardolind", new Array('All','Game','FPS','3D','Jam Game','Pixel Art','Solo','Horror','Story')));
    
    projects.push(new Project("FinalThoughts", new Array('All','Game','FPS','3D','Jam Game','Pixel Art','Horror','Story')));
    
    projects.push(new Project("TetrisRunner", new Array('All','Game','FPS','3D','Jam Game','Solo','Procedural-Gen','Casual','WebGL','Highschool')));
    
    projects.push(new Project("OuterSpace", new Array('Game','FPS','3D','Solo','Procedural-Gen','Unfinished','Horror')));
    
    projects.push(new Project("PlasticSoldiers", new Array('All','Game','FPS','3D','Solo','Highschool')));
    
    projects.push(new Project("FallenPit", new Array('Game','FPS','3D','Solo','Unfinished','Highschool','Story')));
    
    projects.push(new Project("Conversus", new Array('All','Game','2D','Story','School Project','Pixel Art')));
    
    projects.push(new Project("JourneyToHome", new Array('All','Game','3D','School Project','Experimental','Solo','Pixel Art')));
    
    projects.push(new Project("Miniminler", new Array('Strategy','Unfinished','Pixel Art')));
    
    projects.push(new Project("AdventuresOfJool", new Array('Unfinished')));
    
    projects.push(new Project("DangerTwo", new Array('Game','FPS','3D','Unfinished','Pixel Art','Solo')));
    
    projects.push(new Project("DeveloperConsole", new Array('All','Software','Solo')));
    
    projects.push(new Project("LoopOut", new Array('All','Game','2D','Jam Game','Casual','Pixel Art','WebGL')));
    
    projects.push(new Project("LootRunner", new Array('Unfinished')));
    
    projects.push(new Project("Possess", new Array('Story','Highschool')));
    
    projects.push(new Project("Krom", new Array('Unfinished')));
    
    projects.push(new Project("TetrisRunner2", new Array('Unfinished','Highschool')));
    
    projects.push(new Project("Evolution", new Array('All','Software','Experimental','Solo')));
    

    
    projects.push(new Project("GameApp", new Array('Unfinished')));
    
    lastClickedElement = document.getElementById("FilterOn");
    
    ApplyFilter('All');
}


function FilterResult(filter,element)
{
    if(locked == false)
    {
        if(lastClickedElement != null){
            lastClickedElement.id = "FilterOff"; 
        }
        
        element.id = "FilterOn"; 
        lastClickedElement = element;
        
        selectedFilter= filter;
        locked = true;
        
        
        
        ApplyFilter(selectedFilter);
        
        locked = false;
    }
}

function ApplyFilter(filter)
{
        
    //document.write("Hello World!");
    //document.getElementById("Title").innerHTML = "Func=";

    
    //document.getElementById("Title").innerHTML = projects.length;
    for(var i=0;i < projects.length;i++)
    {
        document.getElementById(projects[i].getName()).style.display = "inline";   
    }
    
    var filteredItems = 0;
    
    for(var i=0;i < projects.length;i++)
	{
        //document.getElementById("Title").innerHTML += "testing " + i;
        //document.getElementById("Title").innerHTML += " size =" + projects[i].getFilterLength();
        
        if(projects[i].isFilteredBy(selectedFilter) == true)
        {
            filteredItems++;
            FadeIn(projects[i].getName(),i);
            //document.getElementById("Title").innerHTML += projects[0].getName();
            
            //document.getElementById(projects[i].getName()).style.visibility = "hidden";
        }
        else
        {
            FadeOut(projects[i].getName(),i);
            
            //document.getElementById("Title").innerHTML += " hide:"+projects[i].getName();
            //document.getElementById(projects[i].getName()).style.display = "none";
        }
    }
    
    
    
    UpdateText(filteredItems);
    
    
    //document.getElementById("Title").innerHTML = "Method end!";
}

function UpdateText(filteredCount)
{
    document.getElementById("SelectedProjectCount").innerHTML = "Showing "+ filteredCount + " (out of " + projects.length+")";
}


function FadeOut(targetElementID,classID)
{
    var element =  document.getElementById(targetElementID);
    var op = projects[classID].getOpacity();  // initial opacity
    var scale = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
            element.style.transform = "scale(0.6)";
        }
        element.style.transform = "scale("+scale+")";
        projects[classID].setOpacity(op);
        
        element.style.width = op * 500;
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
        if(scale > 0.6)
           scale -= 0.01
        
    }, 10);
}

function FadeIn(targetElementID,classID)
{
    var element =  document.getElementById(targetElementID);
    var op = projects[classID].getOpacity();  // initial opacity
    var scale = projects[classID].getOpacity();
    if(scale < 0.6)
        scale = 0.6;
    var timer = setInterval(function () {
        if (op >= 0.9){
            clearInterval(timer);
            element.style.display = 'inline';
            element.style.transform = "scale(1)";
        }
        
        projects[classID].setOpacity(op);
        
        element.style.transform = "scale("+scale+")";
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
        if(scale < 1)
            scale += 0.02;
        else
            scale = 1;
            
    }, 10);
}

class Project
{
    constructor(_name,_filters)
    {
        this.name = _name;
        this.filters = _filters;
        this.opacity = 1;
    }
    
    setOpacity(op)
    {
        this.opacity = op;
    }

    getOpacity()
    {
        return this.opacity;
    }
    
    isFilteredBy(filter)
    {
        for(var i=0;i < this.filters.length;i++)
		{
            if(this.filters[i] == filter)
            {
                return true;
            }
		}

        return false;
    }
    
    getName()
    {
        return this.name;
    }

    getFilterLength()
    {
        return this.filters.length;
    }
}
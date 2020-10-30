
class DOMHelper{
    static clearEventListeners(element){
        const clonedElement =element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static movieElement(elementId, newDestinationSelector){
        const element = document.getElementById(elementId);
        console.log(element);
        const destinationElement = document.querySelector(newDestinationSelector);
        console.log(destinationElement);
        destinationElement.append(element);
    }
}
class Tooltip{
    detach =()=>{
        this.element.remove();
    }
    
    show(){
        const tooltipElement =document.createElement('div');
        tooltipElement.className ='card';
        tooltipElement.textContent ='Dummy';
        tooltipElement.addEventListener('click', this.detach);
        document.body.append(tooltipElement);
    }
}

class ProjectItem{
    constructor(id,updateProjectListsFunction,type){
        this.id =id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    showMoreHandler(){
        const tooltip = new Tooltip();
        tooltip.show();
    }

    connectMoreInfoButton(){
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click',this.showMoreHandler);
    }

    connectSwitchButton(type){
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn =DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type ==='active' ? 'Finish' :'Activate';
        switchBtn.addEventListener('click',this.updateProjectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsFunction, type){
       this.updateProjectListsHandler = updateProjectListsFunction;
       this.connectSwitchButton(type);
    }
}

class ProjectList{
    projects = [];

    constructor(type){
        this.type = type;
        const prjItems =document.querySelectorAll(`#${type}-projects li`);
        for(const prjItem of prjItems){
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type))
        }
        console.log(this.projects);
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project){
    this.projects.push(project);
    console.log(project.id);
    DOMHelper.movieElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId){
        // const projectIndex = this.projects.findIndex(p =>p.id ===projectId)
        // this.projects.splice(projectId, 1);
        this.switchHandler(this.projects.find(p =>p.id ===projectId))
        this.projects = this.projects.filter(p =>p.id !==projectId);
    }
}

class App{
    static init(){
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
        activeProjectList.setSwitchHandlerFunction(
            finishedProjectList.addProject.bind(finishedProjectList));

            finishedProjectList.setSwitchHandlerFunction(
                activeProjectList.addProject.bind(activeProjectList));
    }
}
App.init();
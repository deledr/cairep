import { Group } from "./Group.mjs";
class Estimate {
    constructor() {
        this.groups = [];
    }

    get container() {
        return document.querySelectorAll('.t-Region-body')[1].firstElementChild;
    }

    get maxId() {
        let max = 0;
        this.groups.forEach(grp => max = max < grp.groupid ? grp.groupid : max);
        return ++max;
    }

    doesItWork() {
        console.log('from gh: it works!');
    }

    addGroup(group) {
        if(group.groupname.length === 0)
            return false;
        for(let i = 0; i < this.groups.length; i++) {
            if(group.groupname === this.groups[i].groupname)
                return false;
        }
        group.groupid = this.maxId;
        this.groups.push(group);
        let div = document.createElement('div');
        div.innerHTML = Group.printhtml(group);
        this.container.insertAdjacentElement('beforeend', div.firstElementChild);
        return true;
    }
}
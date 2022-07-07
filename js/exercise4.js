(function(){
    

    const institutions = {
        name: "Universidad de la vida",
        location:"Auto educación",
        sites:{
            site1:{
                course1:{
                    aula1:{
                        student1:{
                            name:"Fredy",
                            lastName:"Caseres",
                            age:21,
                        },
                        student2:{
                            name:"Hector",
                            lastName:"Ramirez",
                            age:28,
                        },
                        student3:{
                            name:"Marcos",
                            lastName:"Pedroza",
                            age:18,
                        },
                    },
                    aula2:{
                        student1:{
                            name:"Carlos",
                            lastName:"Mejia",
                            age:30,
                        },
                        student2:{
                            name:"Pedro",
                            lastName:"Rios",
                            age:35,
                        },
                        student3:{
                            name:"Oscar",
                            lastName:"Arcos",
                            age:18,
                        },
                    },
                }
            }
        }
    }

    let { sites } = institutions;
    let { site1 } = sites;
    let { course1 } = site1;
    let { aula2 } = course1;
    let { student2 } = aula2;

    let { name, lastName, age, correr } = institutions.sites.site1.course1.aula2.student3;

    console.log(student2);
    console.log(name);
    console.log(lastName);
    console.log(age);
    console.log(correr);

})();



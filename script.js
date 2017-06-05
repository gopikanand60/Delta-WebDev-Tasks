        var texts = new Array();
		var del = new Array();
		var selarray = new Array();
        var i = 0;
        
        function newText()
        {
            var name = "Text" + i;
			var delid = "Del" + i;
			var selid = "Select" +i;
            
						
			//For New Textarea
            var newTitle = document.createElement('textarea');
            newTitle.setAttribute("placeholder", "Enter Text");
            newTitle.setAttribute("class", "text");
            newTitle.setAttribute("id", name);
            var workSpace = document.getElementById('workSpace');
            texts.push(name);            
            workSpace.appendChild(newTitle);
            document.getElementById(name).focus()
			
			 //Delete Button
            var op = document.createElement('input');
            op.setAttribute("type","submit");
            op.setAttribute("value", "Delete");
            op.setAttribute("id",delid);
            del.push(delid);
            workSpace.appendChild(op);
            op.addEventListener('click', function del()
            {
                newTitle.remove();
			    op.remove();
				select.remove();
				update.remove();
            });
			
			//To Choose Priority
            var select = document.createElement("select");
            select.setAttribute("id",selid);
            var option1 = document.createElement("option");
            var option2 = document.createElement("option");
            var option3 = document.createElement("option");
            option1.value = "1";
            option2.value = "2";
            option3.value = "3";
            option1.text = "High";
            option2.text = "Medium";
            option3.text = "Low";
            workSpace.appendChild(select);
            selarray.push(selid);
            select.appendChild(option1);
            select.appendChild(option2);
            select.appendChild(option3);
			
			//Change Priority Button
            var  update = document.createElement("input");
			update.setAttribute("type", "submit");
			update.setAttribute("value", "Change Priority");
			workSpace.appendChild(update);
			update.addEventListener("click", function prio(){
				        if(select.value === "1")
                        {
                            newTitle.style.backgroundColor = "#e05c5c";
							newTitle.className = "one";
                        }
                        if(select.value === "2")
                        {
                            newTitle.style.backgroundColor = "#ff843d";
							newTitle.className = "two";
                        }
                        if(select.value === "3")
                        {
                            newTitle.style.backgroundColor = "#07db00";
							newTitle.className = "three";
                        }
            });
			i++;
		}
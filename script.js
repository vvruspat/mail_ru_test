var text = "Lorem & ipsum dolor - sit amet, consectetur* 65h 77 adipiscing; elit. IInteger finibus lacus sit amet vehicula rutrum. Suspendisse lacinia sem id rutrum elementum. Proin ut tellus risus. Donec urna nisi, mattis non lacus nec, tempus sodales purus. Suspendisse vitae rhoncus augue, a suscipit metus. Vivamus placerat, quam vel consectetur ornare, mi eros pharetra justo, cursus facilisis arcu lorem eu arcu. Nunc justo mauris, ultrices eget ipsum fringilla, pharetra blandit libero. Mauris id erat dignissim, posuere dolor ac, semper massa. Ut bibendum nec quam in vehicula.Nunc et sagittis leo. Nam at nibh vitae dui dapibus pretium. Praesent sed dignissim tellus. Nunc maximus sodales neque, quis rutrum leo placerat a. Maecenas dapibus tempus dictum. Nam eget purus aliquam, vulputate lorem at, consequat lectus. Sed at malesuada lacus. Sed sit amet ligula arcu. Ut eget nibh volutpat, rutrum enim quis, ultrices urna. Aenean porttitor quis nulla vitae dignissim. Duis vitae sollicitudin ipsum, id ullamcorper magna. Cras placerat odio dictum, euismod sapien sit amet, ornare nulla. Nullam ac elementum eros. Curabitur at accumsan lectus, eget aliquam tellus.Nulla condimentum quam non velit ultricies, non facilisis ex porttitor. Duis sit amet ligula pellentesque, luctus risus in, aliquet purus. Integer tristique, velit a faucibus euismod, urna ipsum sagittis urna, sit amet elementum eros enim sed tortor. Cras ac venenatis magna. Integer aliquet fringilla viverra. Ut ac nulla pretium, ultricies sapien sed, cursus nisi. Vestibulum tempus quam mollis tortor suscipit dapibus. Morbi malesuada, lacus sed dignissim vulputate, dui augue auctor enim, finibus rutrum leo neque et elit. Proin rhoncus dui ac orci vestibulum, in fermentum ipsum fermentum. Donec vel venenatis orci. Maecenas tincidunt nulla at ante placerat elementum et sed sem."

var getNormalString = function(str, constraint) {
    
    var result = [];
    
    var regexp_sentense = /([A-Z]{1}[^\.\!\?]*[\s\.\!\?])/g;
    
    
    // Разбиваем строку на предложения, которые начинаются с большой буквы и заканчиватся знаком препинания или пробелом
    var sentences = str.toString().match(regexp_sentense);
    
    for (var i = 0; i<sentences.length; i++) {
        
        // Разбиваем предложения на слова
        var words = sentences[i].split(/[\s\n]+/g);
        
        var tmp_string = "";
        
        for (var j = 0; j<words.length; j++) {
            
            // Собираем слова в строку не превышающую по длинне constraint
            
            if (words[j].length > constraint) {
                
                // Если слово больше чем consrtraint, разбиваем его на части
                
                for (var m = 0; m < words[j].length; m += constraint) {
                    tmp_string = words[j].substr(m, constraint);
                    result.push(tmp_string);
                }
                
            } else {
            
                // добавляем слова в строку, пока они не превышают общей длинной constraint
            
                if ( (tmp_string.length + words[j].length) <= constraint ) {
                    tmp_string += ((tmp_string.length > 0)?" ":"")+words[j];
                } else {
                    result.push(tmp_string);
                    tmp_string = words[j];
                }

            }
            
            
        }
        
        result.push(tmp_string);
        
        
    }
    
    
    console.log(result.join("\n"));
    
    
    
};
getNormalString(text, 30);
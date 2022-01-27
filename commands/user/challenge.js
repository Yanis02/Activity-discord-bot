module.exports={
    name:"platform",
    execute(client,message,args){
        let i=0;
let sources=[
    "https://www.hackerrank.com/",
    "https://leetcode.com/",
    "https://www.codechef.com/",
    "https://www.topcoder.com/",
    "https://www.codewars.com/",
    "https://projecteuler.net/",
    "https://www.codingame.com/start",
    "https://exercism.org/",
    "https://www.topcoder.com/"
    ];        
    
    i=Math.floor(Math.random() * 10)-2;

                message.reply(sources[i]);
                
            
            
        

    }
}
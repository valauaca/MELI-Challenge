

// Function to get the message from de 
function GetMessage(message) {
    const finalMessage = [];
    message.map((satelite) => {
      const messageSatellite = satelite.message;
      for (let i = 0; i < messageSatellite.length; i++) {
        if (messageSatellite[i]) {
          finalMessage[i] = messageSatellite[i];
        }
        if (!finalMessage[i]) finalMessage[i] = "";
      }
    });
  
    if (finalMessage.includes("")) return [];
  
    return finalMessage.join(" ");
  }

  export default {
    GetMessage
  };
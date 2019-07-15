import EmbarkJS from 'Embark/EmbarkJS';
import SimpleStorage from 'Embark/contracts/SimpleStorage';


EmbarkJS.onReady((err) => {
  if (err) {
    return alert('Error connecting to the blockchain: ' + (err.message || err));
  }

  const getInput = document.getElementById('get-input');
  const setInput = document.getElementById('set-input');
  const getBtn = document.getElementById('get-btn');
  const setBtn = document.getElementById('set-btn');
  const contractEventsBox = document.getElementById('contract-events');
  const setDone = document.getElementById('set-done');

  SimpleStorage.events.StoredDataChanged((err, event) => {
    contractEventsBox.append(event.returnValues.data + ' ');
  });

  getBtn.onclick = function (e) {
    e.preventDefault();
    SimpleStorage.methods.get().call((err, value) => {
      if (err) {
        return alert('Error getting: ' + (err.message || err));
      }
      getInput.value = value;
    })
  };

  setBtn.onclick = function(e) {
    e.preventDefault();
    setDone.innerHTML = '';
    SimpleStorage.methods.set(setInput.value).send((err, txHash) => {
      if (err) {
        return alert('Error setting: ' + (err.message || err));
      }
      setDone.innerHTML = 'Tx Hash: ' + txHash;
    })
      .on('receipt', (receipt) => {
        setDone.append(' - Done');
      });
  };
});

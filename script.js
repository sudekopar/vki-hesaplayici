document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (weight > 0 && heightCm > 0) {
        const heightM = heightCm / 100; // cm'yi metreye çevir
        const vki = (weight / (heightM * heightM)).toFixed(1); // 1 ondalık basamak
        
        const bmiValue = document.getElementById('bmiValue');
        const bmiStatus = document.getElementById('bmiStatus');
        
        bmiValue.textContent = `Vücut Kitle İndeksiniz: ${vki}`;
        
        // Sonuç Kategorileri
        if (vki < 18.5) {
            bmiStatus.textContent = "Zayıf";
            bmiStatus.className = "warning";
        } else if (vki >= 18.5 && vki <= 24.9) {
            bmiStatus.textContent = "Normal Kilolu";
            bmiStatus.className = "normal";
        } else if (vki >= 25 && vki <= 29.9) {
            bmiStatus.textContent = "Fazla Kilolu";
            bmiStatus.className = "warning";
        } else {
            bmiStatus.textContent = "Obez";
            bmiStatus.className = "danger";
        }
    } else {
        alert("Lütfen geçerli boy ve kilo değerleri giriniz!");
    }
});
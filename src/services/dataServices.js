import { Firestore } from '@google-cloud/firestore';
import path from 'path';
import { fileURLToPath } from 'url';

// Menetapkan kredensial dan ID proyek Firestore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathKey = path.resolve(__dirname, '../keys/firestore-keys.json');

// Fungsi untuk menyimpan prediksi ke dalam Firestore
async function savePrediction(id, data) {
  try {
    const predictionsCollection = db.collection('predictions');
    await predictionsCollection.doc(id).set(data);
    return { success: true };
  } catch (error) {
    console.error('Error saving data:', error.message);
    return { success: false, error: 'Failed to save data' };
  }
}

/

import { useState } from 'react';
import { FiAlertTriangle, FiCheckCircle, FiDroplet, FiSettings, FiMail } from 'react-icons/fi';

export default function Alerts() {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'Tank', message: "Niveau d'eau bas - Tank 1", level: 'Critical', date: '2025-04-25 14:30', status: 'Active' },
    { id: 2, type: 'Pompe', message: "Pompe 2 en OFF prolongé", level: 'Warning', date: '2025-04-25 13:10', status: 'Active' },
    { id: 3, type: 'Tank', message: "Conductivité élevée - Tank 3", level: 'Warning', date: '2025-04-24 18:00', status: 'Resolved' },
  ]);

  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showReply, setShowReply] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');

  const resolveAlert = (id) => {
    setAlerts(alerts.map(alert => alert.id === id ? { ...alert, status: 'Resolved' } : alert));
  };

  const handleAfficherEmail = (alert) => {
    setSelectedEmail(alert);
    setShowReply(false);
    setReplyMessage('');
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Critical': return 'text-red-600';
      case 'Warning': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  const getTypeIcon = (type) => {
    return type === 'Tank' ? <FiDroplet /> : <FiSettings />;
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des Alertes</h2>

      {/* Table des Alertes */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Type</th>
              <th className="p-3">Message</th>
              <th className="p-3">Gravité</th>
              <th className="p-3">Date</th>
              <th className="p-3">État</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map(alert => (
              <tr key={alert.id} className="border-b">
                <td className="p-3 flex items-center space-x-2">{getTypeIcon(alert.type)}<span>{alert.type}</span></td>
                <td className="p-3">{alert.message}</td>
                <td className={`p-3 font-semibold ${getLevelColor(alert.level)}`}>{alert.level}</td>
                <td className="p-3">{alert.date}</td>
                <td className={`p-3 ${alert.status === 'Active' ? 'text-red-500' : 'text-green-500'}`}>
                  {alert.status === 'Active' ? <FiAlertTriangle /> : <FiCheckCircle />}
                </td>
                <td className="p-3 flex flex-col space-y-2">
                  {alert.status === 'Active' && (
                    <button 
                      onClick={() => resolveAlert(alert.id)} 
                      className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                      Résoudre
                    </button>
                  )}
                  <button 
                    onClick={() => handleAfficherEmail(alert)} 
                    className="px-3 py-1 bg-blue-500 text-white rounded flex items-center justify-center space-x-1"
                  >
                    <FiMail /> <span>Email</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Affichage Email */}
      {selectedEmail && (
        <div className="bg-white p-4 shadow rounded space-y-3">
          <h3 className="text-xl font-semibold flex items-center space-x-2"><FiMail /> <span>Message Email</span></h3>
          <div><strong>À :</strong> admin@systeme.com</div>
          <div><strong>Objet :</strong> Alerte - {selectedEmail.type}</div>
          <div className="border p-3 rounded bg-gray-50">{selectedEmail.message}</div>

          {!showReply ? (
            <button 
              onClick={() => setShowReply(true)} 
              className="px-3 py-1 bg-green-500 text-white rounded"
            >
              Répondre
            </button>
          ) : (
            <div className="space-y-2">
              <textarea 
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Écrire votre réponse..."
                className="w-full border rounded p-2"
                rows="4"
              />
              <button className="px-3 py-1 bg-blue-600 text-white rounded">Envoyer</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regelwerk für SCP Secret Laboratory</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(45deg, #FFD700, #FF8C00); 
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            animation: fadeInBG 2s ease; 
        }

        .container {
            max-width: 800px;
            padding: 30px;
            background-color: rgba(255, 255, 255, 0.9); 
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }

        h1 {
            font-size: 36px;
            text-align: center;
            margin-bottom: 20px;
            color: #1E90FF;
            animation: heartbeat 1.5s ease infinite;
        }

        .rule-section ul {
            padding-left: 30px;
        }

        .rule-section li {
            font-size: 16px;
            margin-bottom: 10px;
            text-align: justify;
        }

        

        @keyframes fadeInBG {
            from {
                background: #FFD700;
            }
            to {
                background: #FF8C00;
            }
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes heartbeat {
            from {
                transform: scale(1);
            }
            to {
                transform: scale(1.05);
            }
        }
    </style>
    <script>
        function toggleRules() {
            var rulesContainer = document.getElementById('rules-container');
            if (rulesContainer.style.display === 'none') {
                rulesContainer.style.display = 'block';
            } else {
                rulesContainer.style.display = 'none';
            }
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Regelwerk für SCP Secret Laboratory</h1>
        <button onclick="toggleRules()">Regelwerk anzeigen</button>
        <div id="rules-container" style="display: none;">
            <p class="important-text">Willkommen auf unserem Server! Bitte beachte die folgenden <strong>Regeln</strong>, um ein angenehmes Spielerlebnis für alle zu gewährleisten:</p>
            <div class="rule-section">
                <ul>
                    <li><strong class="important-text">1. Respektvoller Umgang:</strong>
                        <ul>
                            <li>- Behandle andere Spieler und das Serverpersonal mit Respekt und Freundlichkeit.</li>
                            <li>- Kein Mobbing, Belästigung, Rassismus, Sexismus oder andere Formen von diskriminierendem Verhalten.</li>
                        </ul>
                    </li>
                    <li><strong class="important-text">2. Teamarbeit und Kommunikation:</strong>
                        <ul>
                            <li>- Arbeite mit deinem Team zusammen, um das Spielziel zu erreichen.</li>
                            <li>- Nutze die bereitgestellten Voice-Chat-Kanäle, um mit anderen Spielern zu kommunizieren.</li>
                        </ul>
                    </li>
                    <li><strong class="important-text">3. Spielverhalten:</strong>
                        <ul>
                            <li>- Cheating, Hacking oder Ausnutzen von Exploits ist strengstens untersagt.</li>
                            <li>- Verbreite keine falschen Informationen über das Spiel oder den Server.</li>
                        </ul>
                    </li>
                    <li><strong class="important-text">4. SCP-Rollen:</strong>
                        <ul>
                            <li>- Halte dich an die vorgegebenen Rollenanforderungen und -einschränkungen.</li>
                            <li>- Verhalte dich fair und ausgewogen, um ein faires Spielerlebnis für alle zu gewährleisten.</li>
                        </ul>
                    </li>
                    <li><strong class="important-text">5. Metagaming und Streamsniping:</strong>
                        <ul>
                            <li>- Metagaming, d.h. das Verwenden von Informationen außerhalb des Spiels, ist nicht erlaubt.</li>
                            <li>- Streamsniping, d.h. das gezielte Ausnutzen von Informationen aus einem Livestream, ist verboten.</li>
                        </ul>
                    </li>
                    <li><strong class="important-text">6. Regelverstöße:</strong>
                        <ul>
                            <li>- Bei Regelverstößen werden angemessene Sanktionen verhängt.</li>
                            <li>- Melde Regelverstöße oder verdächtiges Verhalten dem Serverpersonal.</li>
                        </ul>
                    </li>
                    <li><strong class="important-text">7. Klasse D-Regeln:</strong>
                        <ul>
                            <li>- Gehorsam gegenüber dem Sicherheitspersonal.</li>
                            <li>- Zusammenarbeit mit anderen Klasse-D-Personal und Chaos Insurgency.</li>
                            <li>- Keine Zusammenarbeit mit SCPs.</li>
                        </ul>
                    </li>
                    <li><strong class="important-text">8. MTF-Regeln:</strong>
                        <ul>
                            <li>- Konzentration auf das Missionsziel.</li>
                            <li>- Respektvolles Verhalten gegenüber anderen Klassen.</li>
                            <li>- Kein Friendly Fire.</li>
                        </ul>
                    </li>
                    <li><strong class="important-text">9. Wissenschaftler-Regeln:</strong>
                        <ul>
                            <li>- Gewissenhafte Durchführung der Forschungsarbeit.</li>
                            <li>- Zusammenarbeit mit dem Sicherheitspersonal und MTFs.</li>
                            <li>- Keine unbefugte Nutzung von Anomalien.</li>
                        </ul>
                    </li>
                    <li><strong class="important-text">10. Chaos Insurgency-Regeln:</strong>
                        <ul>
                            <li>- Zusammenarbeit mit anderen Chaos Insurgency-Mitgliedern.</li>
                            <li>- Sabotage und Störung.</li>
                            <li>- Keine Zusammenarbeit mit MTFs.</li>
                            <li>- Soll die Klasse-D-Personal unterstützen.</li>
                            <li>- Darf mit den SCPs zusammenarbeiten.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <p class="important-text">Bitte beachte, dass diese Regeln darauf abzielen, ein faires und freundliches Spielerlebnis zu gewährleisten. Bei weiteren Fragen oder Anliegen wende dich bitte an das Serverpersonal.</p>
            <p>Discord Server: <a class="discord-link" href="https://discord.gg/6eBK634Shh" target="_blank">discord.gg/6eBK634Shh</a></p>
            <p>Viel Spaß beim Spielen!</p>
        </div>
    </div>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GOATED Clan.CODM</title>
    <style>
        :root {
            --primary: #ff4655;
            --secondary: #0f1923;
            --dark: #1a2a3a;
            --light: #ece8e1;
            --warning: #ff9800;
            --danger: #f44336;
            --success: #4CAF50;
            --accent: #ff8a00;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Barlow', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        @font-face {
            font-family: 'Barlow';
            src: url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');
        }
        
        body {
            background-color: var(--secondary);
            color: var(--light);
            line-height: 1.6;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(rgba(15, 25, 35, 0.9), rgba(15, 25, 35, 0.9)), 
                              url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/COD_Mobile_Season_7_Key_Art.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            background-color: var(--dark);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5px);
            overflow: hidden;
        }
        
        .admin-warning {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(90deg, var(--danger), #d32f2f);
            color: white;
            padding: 12px;
            text-align: center;
            font-weight: bold;
            border-radius: 15px 15px 0 0;
            font-size: 14px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            box-shadow: 0 2px 10px rgba(211, 47, 47, 0.3);
        }
        
        header {
            text-align: center;
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 2px solid var(--primary);
            position: relative;
        }
        
        h1, h2, h3, h4 {
            color: var(--primary);
            margin-bottom: 15px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        h1 {
            font-size: 2.5rem;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        h2 {
            font-size: 1.8rem;
            border-left: 4px solid var(--primary);
            padding-left: 10px;
        }
        
        h3 {
            font-size: 1.4rem;
            position: relative;
            display: inline-block;
        }
        
        h3:after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 50px;
            height: 3px;
            background: var(--primary);
            border-radius: 3px;
        }
        
        p {
            margin-bottom: 10px;
            font-size: 1rem;
            line-height: 1.6;
        }
        
        .form-group {
            margin-bottom: 20px;
            position: relative;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            font-size: 0.9rem;
            color: rgba(236, 232, 225, 0.9);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 14px 15px;
            border: none;
            border-radius: 8px;
            background-color: rgba(45, 58, 74, 0.7);
            color: var(--light);
            font-size: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }
        
        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(255, 70, 85, 0.2);
            background-color: rgba(45, 58, 74, 0.9);
        }
        
        button {
            background: linear-gradient(135deg, var(--primary), #ff6b6b);
            color: white;
            border: none;
            padding: 16px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            width: 100%;
            transition: all 0.3s ease;
            margin-top: 10px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
        }
        
        button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 70, 85, 0.4);
        }
        
        button:active {
            transform: translateY(1px);
        }
        
        button:after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: 0.5s;
        }
        
        button:hover:after {
            left: 100%;
        }
        
        .whatsapp-btn {
            background: linear-gradient(135deg, #25D366, #128C7E);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
            text-decoration: none;
            border-radius: 8px;
            padding: 16px;
            transition: all 0.3s ease;
        }
        
        .whatsapp-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
        }
        
        .admin-login-btn {
            background: linear-gradient(135deg, #9c27b0, #6a1b9a);
            margin-top: 5px;
        }
        
        .error-message {
            color: var(--danger);
            text-align: center;
            margin-top: 15px;
            font-size: 0.9rem;
            font-weight: 600;
            padding: 10px;
            border-radius: 5px;
            background-color: rgba(244, 67, 54, 0.1);
            border-left: 3px solid var(--danger);
        }
        
        .dashboard {
            display: none;
            animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .user-info {
            margin-bottom: 30px;
            background: rgba(45, 58, 74, 0.5);
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid var(--primary);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        
        .user-info:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        .status-badge {
            display: inline-block;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
            margin-left: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .status-pending {
            background: var(--warning);
            color: #000;
        }
        
        .status-accepted {
            background: var(--success);
            color: white;
        }
        
        .status-rejected {
            background: var(--danger);
            color: white;
        }
        
        .application-form {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(45, 58, 74, 0.5);
            animation: slideDown 0.4s ease;
        }
        
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        textarea {
            min-height: 150px;
            resize: vertical;
            margin-bottom: 15px;
        }
        
        .logout-btn {
            background: linear-gradient(135deg, #607d8b, #455a64);
            margin-top: 30px;
        }
        
        .admin-actions {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }
        
        .accept-btn {
            background: linear-gradient(135deg, var(--success), #2E7D32);
        }
        
        .reject-btn {
            background: linear-gradient(135deg, var(--danger), #C62828);
        }
        
        .ban-btn {
            background: linear-gradient(135deg, var(--danger), #C62828);
            width: auto;
            padding: 10px 20px;
        }
        
        .user-card {
            background: rgba(45, 58, 74, 0.5);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            border-left: 4px solid var(--primary);
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .user-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        .credits {
            text-align: center;
            margin-top: 40px;
            font-size: 0.9rem;
            opacity: 0.7;
            color: rgba(236, 232, 225, 0.7);
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.1);
        }
        
        .tab-container {
            display: flex;
            margin-bottom: 20px;
            border-bottom: 1px solid rgba(45, 58, 74, 0.5);
        }
        
        .tab {
            padding: 12px 25px;
            cursor: pointer;
            background: transparent;
            color: var(--light);
            border: none;
            border-bottom: 3px solid transparent;
            font-weight: 600;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.9rem;
            position: relative;
        }
        
        .tab.active {
            border-bottom: 3px solid var(--primary);
            font-weight: 700;
            color: var(--primary);
        }
        
        .tab:hover:not(.active) {
            color: var(--primary);
        }
        
        .tab-content {
            display: none;
            animation: fadeIn 0.5s ease;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .security-alert {
            background: linear-gradient(90deg, var(--danger), #d32f2f);
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: 600;
            font-size: 0.9rem;
            display: none;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(244, 67, 54, 0); }
            100% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0); }
        }
        
        .admin-login-form {
            display: none;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px dashed var(--primary);
            animation: fadeIn 0.5s ease;
        }
        
        .hidden {
            display: none;
        }
        
        .logo {
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--primary);
            box-shadow: 0 5px 15px rgba(255, 70, 85, 0.3);
            transition: all 0.3s ease;
        }
        
        .logo:hover {
            transform: rotate(15deg) scale(1.05);
        }
        
        .admin-logo {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--danger);
            margin-right: 15px;
            box-shadow: 0 5px 15px rgba(244, 67, 54, 0.3);
        }
        
        .admin-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .admin-title {
            font-size: 1.8rem;
            background: linear-gradient(90deg, var(--danger), #d32f2f);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .admin-subtitle {
            font-size: 0.9rem;
            opacity: 0.8;
            letter-spacing: 0.5px;
        }
        
        .admin-controls {
            background: rgba(255, 70, 85, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 25px;
            border: 1px solid rgba(255, 70, 85, 0.2);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .admin-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .stat-card {
            background: rgba(45, 58, 74, 0.5);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border-left: 4px solid var(--primary);
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
            margin: 10px 0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .admin-separator {
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
            margin: 25px 0;
        }
        
        .back-btn {
            background: linear-gradient(135deg, #607d8b, #455a64);
            margin-top: 10px;
        }
        
        .clan-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 25px 0;
        }
        
        .clan-announcements {
            background: rgba(45, 58, 74, 0.5);
            padding: 20px;
            border-radius: 10px;
            margin: 25px 0;
            border-left: 4px solid var(--primary);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .announcement {
            padding: 15px 0;
            border-bottom: 1px dashed rgba(255,255,255,0.1);
            transition: all 0.3s ease;
        }
        
        .announcement:hover {
            transform: translateX(5px);
        }
        
        .announcement:last-child {
            border-bottom: none;
        }
        
        .announcement-date {
            font-size: 0.8rem;
            opacity: 0.7;
            margin-top: 5px;
            color: var(--primary);
        }
        
        .user-actions {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 25px 0;
        }
        
        .action-btn {
            padding: 14px;
            font-size: 0.9rem;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .action-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        
        .tournament-card {
            background: rgba(45, 58, 74, 0.5);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            border-left: 4px solid var(--primary);
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .tournament-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .tournament-date {
            font-size: 0.9rem;
            color: var(--primary);
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        .tournament-status {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: bold;
            margin-left: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .upcoming {
            background: var(--success);
            color: white;
        }
        
        .ongoing {
            background: var(--warning);
            color: black;
        }
        
        .completed {
            background: #607d8b;
            color: white;
        }
        
        .user-section {
            margin-bottom: 30px;
            padding: 20px;
            background: rgba(45, 58, 74, 0.3);
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        
        .user-section:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        .notification-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background: var(--danger);
            color: white;
            border-radius: 50%;
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
            font-weight: bold;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            animation: pulse 1.5s infinite;
        }
        
        .notifications-btn {
            position: relative;
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .notifications-btn:hover {
            background: rgba(255,255,255,0.2);
        }
        
        .notification-item {
            padding: 12px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .notification-item:hover {
            background: rgba(255,255,255,0.05);
        }
        
        .notification-item:last-child {
            border-bottom: none;
        }
        
        .notification-time {
            font-size: 0.7rem;
            opacity: 0.7;
            margin-top: 5px;
            color: var(--primary);
        }
        
        .notifications-dropdown {
            position: absolute;
            right: 0;
            top: calc(100% + 10px);
            background: var(--dark);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 10px;
            width: 350px;
            max-height: 500px;
            overflow-y: auto;
            z-index: 100;
            display: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: fadeIn 0.3s ease;
        }
        
        .notifications-container {
            position: relative;
        }
        
        .notifications-container:hover .notifications-dropdown {
            display: block;
        }
        
        .notification-critical {
            color: var(--danger);
            font-weight: bold;
            border-left: 3px solid var(--danger);
            padding-left: 10px;
        }
        
        .clan-members {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .member-card {
            background: rgba(45, 58, 74, 0.5);
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .member-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .member-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--primary);
            margin: 0 auto 10px;
        }
        
        .member-name {
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .member-rank {
            font-size: 0.8rem;
            color: var(--primary);
            font-weight: 600;
        }
        
        .recent-activity {
            margin-top: 30px;
        }
        
        .activity-item {
            display: flex;
            align-items: center;
            padding: 12px;
            border-bottom: 1px dashed rgba(255,255,255,0.1);
            transition: all 0.3s ease;
        }
        
        .activity-item:hover {
            background: rgba(255,255,255,0.05);
            transform: translateX(5px);
        }
        
        .activity-icon {
            width: 40px;
            height: 40px;
            background: rgba(255, 70, 85, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: var(--primary);
            font-size: 1.2rem;
        }
        
        .activity-content {
            flex: 1;
        }
        
        .activity-time {
            font-size: 0.7rem;
            opacity: 0.7;
            margin-top: 3px;
        }
        
        .clan-leaderboard {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        .clan-leaderboard th {
            background: rgba(255, 70, 85, 0.2);
            padding: 12px;
            text-align: left;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.5px;
        }
        
        .clan-leaderboard td {
            padding: 12px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .clan-leaderboard tr:hover {
            background: rgba(255,255,255,0.05);
        }
        
        .leaderboard-rank {
            font-weight: 700;
            color: var(--primary);
            width: 40px;
        }
        
        .leaderboard-player {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .leaderboard-avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .leaderboard-name {
            font-weight: 600;
        }
        
        .leaderboard-score {
            font-weight: 700;
            color: var(--primary);
        }
        
        .clan-events {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .event-card {
            background: rgba(45, 58, 74, 0.5);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        
        .event-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .event-image {
            height: 120px;
            background: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
        }
        
        .event-content {
            padding: 15px;
        }
        
        .event-date {
            font-size: 0.8rem;
            color: var(--primary);
            margin-bottom: 5px;
            font-weight: 600;
        }
        
        .event-title {
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .event-desc {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 15px;
        }
        
        .event-status {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .dashboard-grid {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 30px;
        }
        
        .dashboard-sidebar {
            background: rgba(45, 58, 74, 0.3);
            border-radius: 10px;
            padding: 20px;
            height: fit-content;
        }
        
        .sidebar-section {
            margin-bottom: 25px;
        }
        
        .sidebar-title {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .sidebar-title:after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(255,255,255,0.1);
            margin-left: 10px;
        }
        
        .quick-links {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }
        
        .quick-link {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
            color: var(--light);
            text-decoration: none;
        }
        
        .quick-link:hover {
            background: rgba(255,255,255,0.1);
            transform: translateX(5px);
        }
        
        .quick-link-icon {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
        }
        
        .online-members {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }
        
        .online-member {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .online-member:hover {
            background: rgba(255,255,255,0.1);
        }
        
        .online-avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--success);
        }
        
        .online-name {
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .online-status {
            width: 8px;
            height: 8px;
            background: var(--success);
            border-radius: 50%;
            margin-left: auto;
        }
        
        .clan-progress {
            margin-top: 20px;
        }
        
        .progress-bar {
            height: 8px;
            background: rgba(255,255,255,0.1);
            border-radius: 4px;
            margin-bottom: 5px;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            border-radius: 4px;
            width: 75%;
        }
        
        .progress-text {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
        }
        
        .progress-label {
            color: var(--primary);
            font-weight: 600;
        }
        
        .progress-value {
            opacity: 0.8;
        }
        
        .dashboard-main {
            flex: 1;
        }
        
        .welcome-banner {
            background: linear-gradient(135deg, rgba(255,70,85,0.2), rgba(255,138,0,0.2));
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .welcome-banner:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://www.transparenttextures.com/patterns/dark-mosaic.png');
            opacity: 0.1;
            pointer-events: none;
        }
        
        .welcome-title {
            font-size: 1.8rem;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }
        
        .welcome-subtitle {
            font-size: 1rem;
            opacity: 0.9;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
        }
        
        .welcome-actions {
            display: flex;
            gap: 15px;
            justify-content: center;
            position: relative;
            z-index: 1;
        }
        
        .welcome-btn {
            padding: 12px 25px;
            border-radius: 8px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
        }
        
        .welcome-btn.primary {
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: white;
        }
        
        .welcome-btn.secondary {
            background: rgba(255,255,255,0.1);
            color: white;
        }
        
        .welcome-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        
        .dashboard-section {
            background: rgba(45, 58, 74, 0.3);
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 30px;
        }
        
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .section-title {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--primary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .section-link {
            font-size: 0.8rem;
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .section-link:hover {
            text-decoration: underline;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .stat-item {
            background: rgba(45, 58, 74, 0.5);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .stat-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .stat-icon {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 10px;
        }
        
        .stat-number {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            margin-bottom: 5px;
        }
        
        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .activity-feed {
            display: grid;
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .feed-item {
            display: flex;
            gap: 15px;
            padding: 15px;
            background: rgba(45, 58, 74, 0.3);
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .feed-item:hover {
            background: rgba(45, 58, 74, 0.5);
            transform: translateX(5px);
        }
        
        .feed-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--primary);
        }
        
        .feed-content {
            flex: 1;
        }
        
        .feed-user {
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .feed-action {
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        .feed-time {
            font-size: 0.7rem;
            opacity: 0.7;
            margin-top: 5px;
            color: var(--primary);
        }
        
        .clan-highlights {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .highlight-card {
            background: rgba(45, 58, 74, 0.5);
            border-radius: 10px;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .highlight-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .highlight-image {
            height: 150px;
            background: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2.5rem;
        }
        
        .highlight-content {
            padding: 20px;
        }
        
        .highlight-title {
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .highlight-desc {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 15px;
        }
        
        .highlight-link {
            color: var(--primary);
            font-weight: 600;
            text-decoration: none;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: all 0.3s ease;
        }
        
        .highlight-link:hover {
            text-decoration: underline;
            gap: 8px;
        }
        
        @media (max-width: 768px) {
            .dashboard-grid {
                grid-template-columns: 1fr;
            }
            
            .container {
                padding: 20px;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .user-actions {
                grid-template-columns: 1fr 1fr;
            }
            
            .clan-members {
                grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            }
        }
        
        /* Animations */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        
        .floating {
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(255, 70, 85, 0.5); }
            50% { box-shadow: 0 0 20px rgba(255, 70, 85, 0.8); }
            100% { box-shadow: 0 0 5px rgba(255, 70, 85, 0.5); }
        }
        
        .glowing {
            animation: glow 2s ease-in-out infinite;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--primary);
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #ff6b6b;
        }
    </style>
</head>
<body>
    <!-- Login Container -->
    <div class="container" id="loginContainer">
        <header>
            <img src="https://via.placeholder.com/100" alt="GOATED Clan Logo" class="logo floating">
            <h1>GOATED Clan.CODM</h1>
            <p>Join the elite. Dominate the battlefield.</p>
        </header>
        
        <!-- Regular User Login -->
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required>
        </div>
        
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required>
        </div>
        
        <button onclick="login()">Login</button>
        
        <!-- Admin Login Toggle -->
        <button class="admin-login-btn" onclick="showAdminLogin()">Admin Login</button>
        
        <p id="loginError" class="error-message"></p>
        
        <a href="https://wa.me/2348159035074" class="whatsapp-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="20" height="20" alt="WhatsApp">
            Contact Admin (08159035074)
        </a>
        
        <p style="text-align: center; margin-top: 20px; font-size: 14px;">
            Don't have an account? <a href="#" onclick="showRegister()" style="color: var(--primary); font-weight: 500;">Register here</a>
        </p>
        
        <div class="credits">
            <p>Clan Master: DEADSHOT</p>
            <p>GOATED Clan &copy; 2023</p>
        </div>
    </div>
    
    <!-- Register Container -->
    <div class="container" id="registerContainer" style="display: none;">
        <header>
            <h1>Create Account</h1>
            <p>Join GOATED Clan.CODM</p>
        </header>
        
        <div class="form-group">
            <label for="regUsername">Username</label>
            <input type="text" id="regUsername" placeholder="Choose a username" required>
        </div>
        
        <div class="form-group">
            <label for="regPassword">Password</label>
            <input type="password" id="regPassword" placeholder="Create a password" required>
        </div>
        
        <div class="form-group">
            <label for="regCODMName">CODM In-Game Name</label>
            <input type="text" id="regCODMName" placeholder="Your Call of Duty: Mobile username" required>
        </div>
        
        <button onclick="register()">Register</button>
        <p id="registerError" class="error-message"></p>
        
        <button class="back-btn" onclick="showLogin()">Back to Login</button>
        
        <div class="credits">
            <p>Clan Master: DEADSHOT</p>
            <p>GOATED Clan &copy; 2023</p>
        </div>
    </div>
    
    <!-- User Dashboard -->
    <div class="container dashboard" id="userDashboard">
        <div class="dashboard-grid">
            <div class="dashboard-main">
                <div class="welcome-banner">
                    <h2 class="welcome-title">Welcome back, <span id="dashboardUsername"></span>!</h2>
                    <p class="welcome-subtitle">Ready for your next battle? Check out what's new with the clan.</p>
                    <div class="welcome-actions">
                        <button class="welcome-btn primary" onclick="showApplicationForm()">Apply for Clan</button>
                        <button class="welcome-btn secondary">View Events</button>
                    </div>
                </div>
                
                <div class="dashboard-section">
                    <div class="section-header">
                        <h3 class="section-title">Clan Activities</h3>
                        <a href="#" class="section-link">View All</a>
                    </div>
                    <div class="activity-feed">
                        <div class="feed-item">
                            <img src="https://via.placeholder.com/40" alt="User" class="feed-avatar">
                            <div class="feed-content">
                                <div class="feed-user">DEADSHOT</div>
                                <div class="feed-action">posted a new tournament event</div>
                                <div class="feed-time">2 hours ago</div>
                            </div>
                        </div>
                        <div class="feed-item">
                            <img src="https://via.placeholder.com/40" alt="User" class="feed-avatar">
                            <div class="feed-content">
                                <div class="feed-user">SNIPERPRO</div>
                                <div class="feed-action">achieved Legendary rank in BR</div>
                                <div class="feed-time">5 hours ago</div>
                            </div>
                        </div>
                        <div class="feed-item">
                            <img src="https://via.placeholder.com/40" alt="User" class="feed-avatar">
                            <div class="feed-content">
                                <div class="feed-user">CLAN NEWS</div>
                                <div class="feed-action">Clan moved up to #12 in regional rankings</div>
                                <div class="feed-time">1 day ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="dashboard-section">
                    <div class="section-header">
                        <h3 class="section-title">Upcoming Events</h3>
                        <a href="#" class="section-link">View Calendar</a>
                    </div>
                    <div class="clan-highlights">
                        <div class="highlight-card">
                            <div class="highlight-image" style="background: linear-gradient(135deg, #ff4655, #ff8a00);">
                                🏆
                            </div>
                            <div class="highlight-content">
                                <h4 class="highlight-title">Weekly Tournament</h4>
                                <p class="highlight-desc">Join our weekly clan tournament with 10,000 COD Points prize pool</p>
                                <a href="#" class="highlight-link">
                                    Register Now
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                        <div class="highlight-card">
                            <div class="highlight-image" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
                                🎯
                            </div>
                            <div class="highlight-content">
                                <h4 class="highlight-title">Training Session</h4>
                                <p class="highlight-desc">Advanced sniper training with clan masters</p>
                                <a href="#" class="highlight-link">
                                    Join Session
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                        <div class="highlight-card">
                            <div class="highlight-image" style="background: linear-gradient(135deg, #9c27b0, #6a1b9a);">
                                💬
                            </div>
                            <div class="highlight-content">
                                <h4 class="highlight-title">Clan Meeting</h4>
                                <p class="highlight-desc">Monthly clan meeting to discuss strategies</p>
                                <a href="#" class="highlight-link">
                                    Details
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="applicationForm" class="dashboard-section" style="display: none;">
                    <h3 class="section-title">Clan Application</h3>
                    <div class="form-group">
                        <label for="applicationReason">Why should you join GOATED Clan?</label>
                        <textarea id="applicationReason" placeholder="Tell us about your skills, experience, and why you want to join our clan..."></textarea>
                    </div>
                    <div style="display: flex; gap: 15px;">
                        <button onclick="submitApplication()" style="flex: 1;">Submit Application</button>
                        <button onclick="hideApplicationForm()" class="back-btn" style="flex: 1;">Cancel</button>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-sidebar">
                <div class="sidebar-section">
                    <h4 class="sidebar-title">Your Profile</h4>
                    <div class="user-info">
                        <p>CODM Name: <strong id="dashboardCODMName"></strong></p>
                        <p>Status: <strong id="dashboardStatus"></strong></p>
                        <p>Joined: <span id="memberSince"></span></p>
                    </div>
                </div>
                
                <div class="sidebar-section">
                    <h4 class="sidebar-title">Quick Links</h4>
                    <div class="quick-links">
                        <a href="#" class="quick-link">
                            <div class="quick-link-icon">📋</div>
                            Clan Rules
                        </a>
                        <a href="#" class="quick-link">
                            <div class="quick-link-icon">📅</div>
                            Event Calendar
                        </a>
                        <a href="#" class="quick-link">
                            <div class="quick-link-icon">🏆</div>
                            Leaderboards
                        </a>
                        <a href="#" class="quick-link">
                            <div class="quick-link-icon">💬</div>
                            Discord Server
                        </a>
                    </div>
                </div>
                
                <div class="sidebar-section">
                    <h4 class="sidebar-title">Online Members</h4>
                    <div class="online-members">
                        <div class="online-member">
                            <img src="https://via.placeholder.com/30" alt="Member" class="online-avatar">
                            <div class="online-name">DEADSHOT</div>
                            <div class="online-status"></div>
                        </div>
                        <div class="online-member">
                            <img src="https://via.placeholder.com/30" alt="Member" class="online-avatar">
                            <div class="online-name">SNIPERPRO</div>
                            <div class="online-status"></div>
                        </div>
                        <div class="online-member">
                            <img src="https://via.placeholder.com/30" alt="Member" class="online-avatar">
                            <div class="online-name">GHOST</div>
                            <div class="online-status"></div>
                        </div>
                        <div class="online-member">
                            <img src="https://via.placeholder.com/30" alt="Member" class="online-avatar">
                            <div class="online-name">WARRIOR</div>
                            <div class="online-status"></div>
                        </div>
                    </div>
                </div>
                
                <div class="sidebar-section">
                    <h4 class="sidebar-title">Clan Progress</h4>
                    <div class="clan-progress">
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                        <div class="progress-text">
                            <span class="progress-label">Season Rank</span>
                            <span class="progress-value">75%</span>
                        </div>
                    </div>
                </div>
                
                <button class="logout-btn" onclick="logout()">Logout</button>
            </div>
        </div>
        
        <div class="credits">
            <p>Clan Master: DEADSHOT</p>
            <p>GOATED Clan &copy; 2023</p>
        </div>
    </div>
    
    <!-- Admin Login Container -->
    <div class="container hidden" id="adminLoginContainer">
        <header>
            <div class="admin-header">
                <img src="https://via.placeholder.com/70" alt="Admin Logo" class="admin-logo glowing">
                <div>
                    <h1 class="admin-title">ADMIN PORTAL</h1>
                    <p class="admin-subtitle">GOATED Clan Management System</p>
                </div>
            </div>
        </header>
        
        <div class="form-group">
            <label for="adminUsername">Username</label>
            <input type="text" id="adminUsername" value="ADMIN" readonly>
        </div>
        
        <div class="form-group">
            <label for="adminPassword">Password</label>
            <input type="password" id="adminPassword" placeholder="Enter admin password" required>
        </div>
        
        <button onclick="adminLogin()">Login</button>
        <p id="adminLoginError" class="error-message"></p>
        
        <button class="back-btn" onclick="showLogin()">Back to Main Site</button>
        
        <div class="credits">
            <p>Restricted Access &copy; 2023</p>
        </div>
    </div>
    
    <!-- Admin Dashboard -->
    <div class="container dashboard" id="adminDashboard">
        <div class="admin-warning">
            ⚠️ RESTRICTED ADMIN DASHBOARD - UNAUTHORIZED ACCESS PROHIBITED ⚠️
        </div>
        
        <div class="dashboard-header">
            <div>
                <h2>Admin Dashboard</h2>
                <p style="font-size: 14px; opacity: 0.8;">Logged in as: ADMIN</p>
            </div>
            <div class="notifications-container">
                <button class="notifications-btn" id="notificationsBtn">
                    🔔 Notifications
                    <span class="notification-badge" id="notificationBadge">2</span>
                </button>
                <div class="notifications-dropdown" id="notificationsDropdown">
                    <div class="notification-item notification-critical">
                        <p>Failed admin login attempt from IP: 192.168.1.1</p>
                        <p class="notification-time">30 minutes ago</p>
                    </div>
                    <div class="notification-item">
                        <p>New user registered: player3</p>
                        <p class="notification-time">1 hour ago</p>
                    </div>
                    <div class="notification-item">
                        <p>User player1 submitted clan application</p>
                        <p class="notification-time">2 hours ago</p>
                    </div>
                </div>
            </div>
            <button class="logout-btn" onclick="logout()">Logout</button>
        </div>
        
        <div id="securityAlert" class="security-alert">
            Security Alert: Failed admin login attempt detected from IP: 192.168.1.1
        </div>
        
        <div class="admin-controls">
            <div class="admin-stats">
                <div class="stat-card">
                    <div class="stat-value" id="totalUsers">47</div>
                    <div class="stat-label">Total Users</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="pendingApps">3</div>
                    <div class="stat-label">Pending Applications</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="activeMembers">42</div>
                    <div class="stat-label">Active Members</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="bannedUsers">2</div>
                    <div class="stat-label">Banned Users</div>
                </div>
            </div>
            
            <div class="admin-actions">
                <button onclick="switchTab('applications')">Applications</button>
                <button onclick="switchTab('users')">User Management</button>
                <button onclick="switchTab('security')">Security Logs</button>
                <button onclick="switchTab('announcements')">Announcements</button>
            </div>
        </div>
        
        <div id="applicationsTab" class="tab-content active">
            <h3>Pending Applications</h3>
            <div id="applicationsList">
                <div class="user-card">
                    <h4>CODM_Player1 (player1)</h4>
                    <p>I'm a competitive player looking to join a strong clan for tournaments.</p>
                    <p><small>Applied: 11/5/2023, 2:30:45 PM</small></p>
                    <div class="admin-actions">
                        <button class="accept-btn" onclick="updateApplication(1, 'Accepted')">Accept</button>
                        <button class="reject-btn" onclick="updateApplication(1, 'Rejected')">Reject</button>
                    </div>
                </div>
                <div class="user-card">
                    <h4>SNIPER_GOD (player3)</h4>
                    <p>I have 5 years of FPS experience and want to join a competitive clan.</p>
                    <p><small>Applied: 11/4/2023, 5:45:12 PM</small></p>
                    <div class="admin-actions">
                        <button class="accept-btn" onclick="updateApplication(2, 'Accepted')">Accept</button>
                        <button class="reject-btn" onclick="updateApplication(2, 'Rejected')">Reject</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="usersTab" class="tab-content">
            <h3>User Management</h3>
            <div id="usersList">
                <div class="user-card">
                    <h4>player1 <span style="color:var(--success)">(Member)</span></h4>
                    <p>CODM Name: CODM_Player1</p>
                    <p>Password: test123</p>
                    <p>Joined: 11/1/2023</p>
                    <div class="admin-actions">
                        <button onclick="changeUserStatus(1, 'Member')">Make Member</button>
                        <button class="ban-btn" onclick="banUser(1)">Ban</button>
                    </div>
                </div>
                <div class="user-card">
                    <h4>player2 <span style="color:var(--success)">(Member)</span></h4>
                    <p>CODM Name: CODM_Player2</p>
                    <p>Password: test123</p>
                    <p>Joined: 11/1/2023</p>
                    <div class="admin-actions">
                        <button onclick="changeUserStatus(2, 'Member')">Make Member</button>
                        <button class="ban-btn" onclick="banUser(2)">Ban</button>
                    </div>
                </div>
                <div class="user-card">
                    <h4>player3 <span style="color:var(--warning)">(Pending)</span></h4>
                    <p>CODM Name: SNIPER_GOD</p>
                    <p>Password: sniper123</p>
                    <p>Joined: 11/4/2023</p>
                    <div class="admin-actions">
                        <button onclick="changeUserStatus(3, 'Member')">Make Member</button>
                        <button class="ban-btn" onclick="banUser(3)">Ban</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="securityTab" class="tab-content">
            <h3>Security Logs</h3>
            <div id="securityLogs">
                <div class="user-card">
                    <p><strong>11/5/2023, 2:45:30 PM</strong></p>
                    <p>Failed admin login attempt from IP: 192.168.1.1</p>
                </div>
                <div class="user-card">
                    <p><strong>11/5/2023, 2:30:45 PM</strong></p>
                    <p>User player1 submitted clan application</p>
                </div>
                <div class="user-card">
                    <p><strong>11/5/2023, 2:15:12 PM</strong></p>
                    <p>User player1 logged in</p>
                </div>
                <div class="user-card">
                    <p><strong>11/4/2023, 5:45:12 PM</strong></p>
                    <p>New user registered: player3</p>
                </div>
            </div>
        </div>
        
        <div id="announcementsTab" class="tab-content">
            <h3>Manage Announcements</h3>
            <div class="form-group">
                <label for="announcementTitle">Title</label>
                <input type="text" id="announcementTitle" placeholder="Enter announcement title">
            </div>
            <div class="form-group">
                <label for="announcementContent">Content</label>
                <textarea id="announcementContent" placeholder="Enter announcement content"></textarea>
            </div>
            <button onclick="postAnnouncement()">Post Announcement</button>
            <div id="currentAnnouncements" style="margin-top: 20px;">
                <h4>Current Announcements</h4>
                <div id="announcementsList">
                    <div class="user-card">
                        <h4>Weekly Tournament - Friday 8PM</h4>
                        <p>Prepare for our weekly clan tournament. Prize pool: 10,000 COD Points</p>
                        <p><small>Posted: 11/3/2023, 10:30:00 AM</small></p>
                        <button class="ban-btn" onclick="deleteAnnouncement(1)">Delete</button>
                    </div>
                    <div class="user-card">
                        <h4>New Clan Rules</h4>
                        <p>Please review the updated clan rules in the #rules channel on Discord</p>
                        <p><small>Posted: 10/29/2023, 3:45:00 PM</small></p>
                        <button class="ban-btn" onclick="deleteAnnouncement(2)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="admin-separator"></div>
        
        <div class="credits">
            <p>GOATED Clan Admin Portal &copy; 2023</p>
            <p style="font-size: 12px; opacity: 0.6;">Last login: <span id="lastLoginTime">11/5/2023, 2:45:30 PM</span></p>
        </div>
    </div>

    <script>
        // Database
        let users = JSON.parse(localStorage.getItem('goatedUsers')) || [];
        let applications = JSON.parse(localStorage.getItem('goatedApplications')) || [];
        let securityLogs = JSON.parse(localStorage.getItem('goatedSecurityLogs')) || [];
        let announcements = JSON.parse(localStorage.getItem('goatedAnnouncements')) || [];
        let notifications = JSON.parse(localStorage.getItem('goatedNotifications')) || [];
        let currentUser = null;
        const ADMIN_PASSWORD = "DANIEL";
        
        // Initialize with demo data if none exists
        if (users.length === 0) {
            users = [
                {
                    id: 1,
                    username: "player1",
                    password: "test123",
                    codmName: "CODM_Player1",
                    isAdmin: false,
                    joined: "11/1/2023",
                    banned: false,
                    status: "Member"
                },
                {
                    id: 2,
                    username: "player2",
                    password: "test123",
                    codmName: "CODM_Player2",
                    isAdmin: false,
                    joined: "11/1/2023",
                    banned: false,
                    status: "Member"
                },
                {
                    id: 3,
                    username: "player3",
                    password: "sniper123",
                    codmName: "SNIPER_GOD",
                    isAdmin: false,
                    joined: "11/4/2023",
                    banned: false,
                    status: "Pending"
                }
            ];
            localStorage.setItem('goatedUsers', JSON.stringify(users));
        }
        
        if (applications.length === 0) {
            applications = [
                {
                    id: 1,
                    userId: 1,
                    username: "player1",
                    codmName: "CODM_Player1",
                    reason: "I'm a competitive player looking to join a strong clan for tournaments.",
                    status: "Pending",
                    date: "11/5/2023, 2:30:45 PM"
                },
                {
                    id: 2,
                    userId: 3,
                    username: "player3",
                    codmName: "SNIPER_GOD",
                    reason: "I have 5 years of FPS experience and want to join a competitive clan.",
                    status: "Pending",
                    date: "11/4/2023, 5:45:12 PM"
                }
            ];
            localStorage.setItem('goatedApplications', JSON.stringify(applications));
        }
        
        if (announcements.length === 0) {
            announcements = [
                {
                    id: 1,
                    title: "Weekly Tournament - Friday 8PM",
                    content: "Prepare for our weekly clan tournament. Prize pool: 10,000 COD Points",
                    date: "11/3/2023, 10:30:00 AM"
                },
                {
                    id: 2,
                    title: "New Clan Rules",
                    content: "Please review the updated clan rules in the #rules channel on Discord",
                    date: "10/29/2023, 3:45:00 PM"
                }
            ];
            localStorage.setItem('goatedAnnouncements', JSON.stringify(announcements));
        }
        
        if (securityLogs.length === 0) {
            securityLogs = [
                {
                    timestamp: "11/5/2023, 2:45:30 PM",
                    event: "Failed admin login attempt from IP: 192.168.1.1"
                },
                {
                    timestamp: "11/5/2023, 2:30:45 PM",
                    event: "User player1 submitted clan application"
                },
                {
                    timestamp: "11/5/2023, 2:15:12 PM",
                    event: "User player1 logged in"
                },
                {
                    timestamp: "11/4/2023, 5:45:12 PM",
                    event: "New user registered: player3"
                }
            ];
            localStorage.setItem('goatedSecurityLogs', JSON.stringify(securityLogs));
        }
        
        if (notifications.length === 0) {
            notifications = [
                {
                    id: 1,
                    message: "Failed admin login attempt from IP: 192.168.1.1",
                    type: "critical",
                    timestamp: "11/5/2023, 2:45:30 PM",
                    read: false
                },
                {
                    id: 2,
                    message: "New user registered: player3",
                    type: "info",
                    timestamp: "11/4/2023, 5:45:12 PM",
                    read: false
                },
                {
                    id: 3,
                    message: "User player1 submitted clan application",
                    type: "info",
                    timestamp: "11/5/2023, 2:30:45 PM",
                    read: true
                }
            ];
            localStorage.setItem('goatedNotifications', JSON.stringify(notifications));
        }
        
        // Show admin login form
        function showAdminLogin() {
            document.getElementById('loginContainer').classList.add('hidden');
            document.getElementById('registerContainer').classList.add('hidden');
            document.getElementById('adminLoginContainer').classList.remove('hidden');
            document.getElementById('adminPassword').focus();
        }
        
        // Show login form
        function showLogin() {
            document.getElementById('loginContainer').classList.remove('hidden');
            document.getElementById('registerContainer').classList.add('hidden');
            document.getElementById('adminLoginContainer').classList.add('hidden');
            document.getElementById('userDashboard').classList.add('hidden');
            document.getElementById('adminDashboard').classList.add('hidden');
            document.getElementById('loginError').textContent = '';
        }
        
        // Show register form
        function showRegister() {
            document.getElementById('loginContainer').classList.add('hidden');
            document.getElementById('registerContainer').classList.remove('hidden');
            document.getElementById('adminLoginContainer').classList.add('hidden');
            document.getElementById('userDashboard').classList.add('hidden');
            document.getElementById('adminDashboard').classList.add('hidden');
            document.getElementById('registerError').textContent = '';
        }
        
        // Regular user login
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            const user = users.find(u => u.username === username && u.password === password);
            
            if (!user) {
                document.getElementById('loginError').textContent = "Invalid username or password!";
                logSecurityEvent(`${username} failed login attempt`);
                addNotification(`Failed login attempt for username: ${username}`, "critical");
                return;
            }
            
            if (user.banned) {
                document.getElementById('loginError').textContent = "This account has been banned by admin!";
                logSecurityEvent(`${username} attempted to login to banned account`);
                addNotification(`Banned user attempted login: ${username}`, "critical");
                return;
            }
            
            currentUser = user;
            showUserDashboard();
            logSecurityEvent(`${username} logged in`);
            addNotification(`User logged in: ${username}`, "info");
        }
        
        // Admin login
        function adminLogin() {
            const password = document.getElementById('adminPassword').value;
            
            if (password !== ADMIN_PASSWORD) {
                document.getElementById('adminLoginError').textContent = "Invalid admin password!";
                logSecurityEvent(`Failed admin login attempt`);
                addNotification(`Failed admin login attempt`, "critical");
                return;
            }
            
            // Successful admin login
            currentUser = {
                id: 0,
                username: "ADMIN",
                isAdmin: true
            };
            
            showAdminDashboard();
            document.getElementById('lastLoginTime').textContent = new Date().toLocaleString();
            logSecurityEvent("Admin logged in");
            addNotification("Admin logged in", "info");
            
            // Mark all notifications as read
            notifications = notifications.map(n => ({...n, read: true}));
            localStorage.setItem('goatedNotifications', JSON.stringify(notifications));
            updateNotificationBadge();
        }
        
        // User registration
        function register() {
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            const codmName = document.getElementById('regCODMName').value;
            
            if (!username || !password || !codmName) {
                document.getElementById('registerError').textContent = "All fields are required!";
                return;
            }
            
            if (users.some(user => user.username === username)) {
                document.getElementById('registerError').textContent = "Username already exists!";
                return;
            }
            
            const newUser = {
                id: Date.now(),
                username,
                password,
                codmName,
                isAdmin: false,
                joined: new Date().toLocaleDateString(),
                banned: false,
                status: "Applicant"
            };
            
            users.push(newUser);
            localStorage.setItem('goatedUsers', JSON.stringify(users));
            
            // Clear form and show success
            document.getElementById('registerError').textContent = "";
            document.getElementById('regUsername').value = "";
            document.getElementById('regPassword').value = "";
            document.getElementById('regCODMName').value = "";
            
            logSecurityEvent(`New user registered: ${username}`);
            addNotification(`New user registered: ${username}`, "info");
            alert("Registration successful! You can now login.");
            showLogin();
        }
        
        // Show user dashboard
        function showUserDashboard() {
            document.getElementById('loginContainer').classList.add('hidden');
            document.getElementById('registerContainer').classList.add('hidden');
            document.getElementById('adminLoginContainer').classList.add('hidden');
            document.getElementById('userDashboard').classList.remove('hidden');
            document.getElementById('adminDashboard').classList.add('hidden');
            
            // Update dashboard info
            document.getElementById('dashboardUsername').textContent = currentUser.username;
            document.getElementById('dashboardCODMName').textContent = currentUser.codmName;
            document.getElementById('memberSince').textContent = currentUser.joined;
            
            // Set status
            const statusElement = document.getElementById('dashboardStatus');
            statusElement.textContent = currentUser.status || "Applicant";
            
            // Set status badge color
            if (currentUser.status === "Member") {
                statusElement.className = 'status-badge status-accepted';
            } else if (currentUser.status === "Banned") {
                statusElement.className = 'status-badge status-rejected';
            } else {
                statusElement.className = 'status-badge status-pending';
            }
            
            // Check for existing application
            const userApp = applications.find(app => app.userId === currentUser.id);
            if (userApp) {
                document.getElementById('applicationStatus').innerHTML = `
                    <h3>Your Clan Application</h3>
                    <div class="user-info">
                        <p>Status: <span class="status-badge status-${userApp.status.toLowerCase()}">${userApp.status}</span></p>
                        <p>Reason: ${userApp.reason}</p>
                        <p>Submitted: ${userApp.date}</p>
                    </div>
                `;
            }
        }
        
        // Show admin dashboard
        function showAdminDashboard() {
            document.getElementById('loginContainer').classList.add('hidden');
            document.getElementById('registerContainer').classList.add('hidden');
            document.getElementById('adminLoginContainer').classList.add('hidden');
            document.getElementById('userDashboard').classList.add('hidden');
            document.getElementById('adminDashboard').classList.remove('hidden');
            
            // Update stats
            document.getElementById('totalUsers').textContent = users.length;
            document.getElementById('pendingApps').textContent = applications.filter(app => app.status === "Pending").length;
            document.getElementById('activeMembers').textContent = users.filter(u => u.status === "Member").length;
            document.getElementById('bannedUsers').textContent = users.filter(u => u.banned).length;
            
            loadApplications();
            loadUsers();
            loadSecurityLogs();
            loadAnnouncements();
            loadNotifications();
            updateNotificationBadge();
        }
        
        // Switch tabs in admin dashboard
        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            if (tabName === 'applications') {
                document.getElementById('applicationsTab').classList.add('active');
                loadApplications();
            } else if (tabName === 'users') {
                document.getElementById('usersTab').classList.add('active');
                loadUsers();
            } else if (tabName === 'security') {
                document.getElementById('securityTab').classList.add('active');
                loadSecurityLogs();
            } else {
                document.getElementById('announcementsTab').classList.add('active');
                loadAnnouncements();
            }
        }
        
        // Load applications for admin
        function loadApplications() {
            const list = document.getElementById('applicationsList');
            list.innerHTML = '';
            
            const pendingApps = applications.filter(app => app.status === "Pending");
            
            if (pendingApps.length === 0) {
                list.innerHTML = '<div class="user-card"><p>No pending applications.</p></div>';
                return;
            }
            
            pendingApps.forEach(app => {
                const card = document.createElement('div');
                card.className = 'user-card';
                card.innerHTML = `
                    <h4>${app.codmName} (${app.username})</h4>
                    <p>${app.reason}</p>
                    <p><small>Applied: ${app.date}</small></p>
                    <div class="admin-actions">
                        <button class="accept-btn" onclick="updateApplication(${app.id}, 'Accepted')">Accept</button>
                        <button class="reject-btn" onclick="updateApplication(${app.id}, 'Rejected')">Reject</button>
                    </div>
                `;
                list.appendChild(card);
            });
        }
        
        // Load users for admin
        function loadUsers() {
            const list = document.getElementById('usersList');
            list.innerHTML = '';
            
            if (users.length === 0) {
                list.innerHTML = '<div class="user-card"><p>No registered users.</p></div>';
                return;
            }
            
            users.forEach(user => {
                if (user.username === "ADMIN") return; // Skip admin user
                
                const status = user.banned ? "Banned" : (user.status || "Applicant");
                const statusColor = status === "Member" ? "var(--success)" : 
                                  status === "Banned" ? "var(--danger)" : "var(--warning)";
                
                const card = document.createElement('div');
                card.className = 'user-card';
                card.innerHTML = `
                    <h4>${user.username} <span style="color:${statusColor}">(${status})</span></h4>
                    <p>CODM Name: ${user.codmName}</p>
                    <p>Password: ${user.password}</p>
                    <p>Joined: ${user.joined}</p>
                    <div class="admin-actions">
                        <button onclick="changeUserStatus(${user.id}, 'Member')">Make Member</button>
                        <button class="ban-btn" onclick="banUser(${user.id})">${user.banned ? 'Unban' : 'Ban'}</button>
                    </div>
                `;
                list.appendChild(card);
            });
        }
        
        // Load security logs
        function loadSecurityLogs() {
            const logs = document.getElementById('securityLogs');
            logs.innerHTML = '';
            
            if (securityLogs.length === 0) {
                logs.innerHTML = '<div class="user-card"><p>No security events logged.</p></div>';
                return;
            }
            
            // Show most recent first
            const reversedLogs = [...securityLogs].reverse();
            
            reversedLogs.forEach(log => {
                const logEntry = document.createElement('div');
                logEntry.className = 'user-card';
                logEntry.innerHTML = `
                    <p><strong>${log.timestamp}</strong></p>
                    <p>${log.event}</p>
                `;
                logs.appendChild(logEntry);
            });
        }
        
        // Load announcements
        function loadAnnouncements() {
            const list = document.getElementById('announcementsList');
            list.innerHTML = '';
            
            if (announcements.length === 0) {
                list.innerHTML = '<div class="user-card"><p>No announcements yet.</p></div>';
                return;
            }
            
            announcements.forEach(announcement => {
                const announcementElement = document.createElement('div');
                announcementElement.className = 'user-card';
                announcementElement.innerHTML = `
                    <h4>${announcement.title}</h4>
                    <p>${announcement.content}</p>
                    <p><small>Posted: ${announcement.date}</small></p>
                    <button class="ban-btn" onclick="deleteAnnouncement(${announcement.id})">Delete</button>
                `;
                list.appendChild(announcementElement);
            });
        }
        
        // Load notifications
        function loadNotifications() {
            const list = document.getElementById('notificationsList');
            list.innerHTML = '';
            
            if (notifications.length === 0) {
                list.innerHTML = '<div class="notification-item"><p>No notifications</p></div>';
                return;
            }
            
            // Show most recent first
            const reversedNotifications = [...notifications].reverse();
            
            reversedNotifications.forEach(notification => {
                const notificationElement = document.createElement('div');
                notificationElement.className = `notification-item ${notification.type === "critical" ? "notification-critical" : ""}`;
                notificationElement.innerHTML = `
                    <p>${notification.message}</p>
                    <p class="notification-time">${notification.timestamp}</p>
                `;
                list.appendChild(notificationElement);
            });
        }
        
        // Update notification badge
        function updateNotificationBadge() {
            const unreadCount = notifications.filter(n => !n.read).length;
            document.getElementById('notificationBadge').textContent = unreadCount;
            document.getElementById('notificationBadge').style.display = unreadCount > 0 ? "flex" : "none";
        }
        
        // Add new notification
        function addNotification(message, type = "info") {
            const newNotification = {
                id: Date.now(),
                message,
                type,
                timestamp: new Date().toLocaleString(),
                read: false
            };
            
            notifications.push(newNotification);
            localStorage.setItem('goatedNotifications', JSON.stringify(notifications));
            
            // If admin is logged in, update the badge
            if (currentUser && currentUser.isAdmin) {
                updateNotificationBadge();
            }
        }
        
        // Post new announcement
        function postAnnouncement() {
            const title = document.getElementById('announcementTitle').value;
            const content = document.getElementById('announcementContent').value;
            
            if (!title || !content) {
                alert("Please fill in both title and content!");
                return;
            }
            
            const newAnnouncement = {
                id: Date.now(),
                title,
                content,
                date: new Date().toLocaleString()
            };
            
            announcements.push(newAnnouncement);
            localStorage.setItem('goatedAnnouncements', JSON.stringify(announcements));
            
            document.getElementById('announcementTitle').value = "";
            document.getElementById('announcementContent').value = "";
            
            loadAnnouncements();
            logSecurityEvent("New announcement posted");
            addNotification("New announcement posted", "info");
            alert("Announcement posted successfully!");
        }
        
        // Delete announcement
        function deleteAnnouncement(id) {
            if (confirm("Are you sure you want to delete this announcement?")) {
                announcements = announcements.filter(announcement => announcement.id !== id);
                localStorage.setItem('goatedAnnouncements', JSON.stringify(announcements));
                loadAnnouncements();
                logSecurityEvent("Announcement deleted");
                addNotification("Announcement deleted", "info");
            }
        }
        
        // Log security events
        function logSecurityEvent(event) {
            const newLog = {
                timestamp: new Date().toLocaleString(),
                event: event
            };
            
            securityLogs.push(newLog);
            localStorage.setItem('goatedSecurityLogs', JSON.stringify(securityLogs));
            
            // If admin is logged in, show alert for important events
            if (currentUser && currentUser.isAdmin && event.includes("attempt")) {
                const alert = document.getElementById('securityAlert');
                alert.textContent = `Security Alert: ${event}`;
                alert.style.display = 'block';
                setTimeout(() => alert.style.display = 'none', 5000);
            }
        }
        
        // Update application status
        function updateApplication(id, status) {
            applications = applications.map(app => {
                if (app.id === id) {
                    // Update user status if accepted
                    if (status === "Accepted") {
                        users = users.map(user => {
                            if (user.id === app.userId) {
                                return {...user, status: "Member"};
                            }
                            return user;
                        });
                        localStorage.setItem('goatedUsers', JSON.stringify(users));
                    }
                    
                    logSecurityEvent(`Application ${status.toLowerCase()}: ${app.username} (${app.codmName})`);
                    addNotification(`Application ${status.toLowerCase()}: ${app.username}`, "info");
                    return {...app, status};
                }
                return app;
            });
            
            localStorage.setItem('goatedApplications', JSON.stringify(applications));
            loadApplications();
            alert(`Application ${status.toLowerCase()}!`);
        }
        
        // Change user status
        function changeUserStatus(userId, status) {
            users = users.map(user => {
                if (user.id === userId) {
                    logSecurityEvent(`User ${user.username} status changed to ${status} by ADMIN`);
                    addNotification(`User status changed: ${user.username} to ${status}`, "info");
                    return {...user, status};
                }
                return user;
            });
            
            localStorage.setItem('goatedUsers', JSON.stringify(users));
            loadUsers();
            alert(`User status updated to ${status}!`);
        }
        
        // Ban/unban user
        function banUser(userId) {
            users = users.map(user => {
                if (user.id === userId) {
                    const action = user.banned ? "unbanned" : "banned";
                    logSecurityEvent(`${user.username} ${action} by ADMIN`);
                    addNotification(`User ${action}: ${user.username}`, "critical");
                    return {...user, banned: !user.banned};
                }
                return user;
            });
            
            localStorage.setItem('goatedUsers', JSON.stringify(users));
            loadUsers();
            alert(`User ${users.find(u => u.id === userId).banned ? 'banned' : 'unbanned'}!`);
        }
        
        // Show application form
        function showApplicationForm() {
            document.getElementById('applicationForm').style.display = 'block';
        }
        
        // Hide application form
        function hideApplicationForm() {
            document.getElementById('applicationForm').style.display = 'none';
        }
        
        // Submit application
        function submitApplication() {
            const reason = document.getElementById('applicationReason').value;
            
            if (!reason) {
                alert("Please explain why you want to join!");
                return;
            }
            
            // Remove any existing application
            applications = applications.filter(app => app.userId !== currentUser.id);
            
            const application = {
                id: Date.now(),
                userId: currentUser.id,
                username: currentUser.username,
                codmName: currentUser.codmName,
                reason,
                status: "Pending",
                date: new Date().toLocaleString()
            };
            
            applications.push(application);
            localStorage.setItem('goatedApplications', JSON.stringify(applications));
            
            // Update user status
            users = users.map(user => {
                if (user.id === currentUser.id) {
                    return {...user, status: "Pending"};
                }
                return user;
            });
            localStorage.setItem('goatedUsers', JSON.stringify(users));
            
            logSecurityEvent(`${currentUser.username} submitted clan application`);
            addNotification(`New application submitted by ${currentUser.username}`, "info");
            
            document.getElementById('applicationReason').value = "";
            hideApplicationForm();
            showUserDashboard(); // Refresh the dashboard
            alert("Application submitted! Our admins will review it soon.");
        }
        
        // User logout
        function logout() {
            if (currentUser) {
                logSecurityEvent(`${currentUser.username} logged out`);
                addNotification(`User logged out: ${currentUser.username}`, "info");
            }
            currentUser = null;
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            document.getElementById('adminPassword').value = "";
            showLogin();
        }
        
        // Initialize the page
        showLogin();
    </script>
</body>
</html>
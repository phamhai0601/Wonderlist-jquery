var itemTaskSuccess = '<span class=\"icon-item-task\"><svg name=\"task-check\" width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\"> <g> <path d=\"M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004\"></path> <path d=\"M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5\"></path> </g> </svg></span><p><span>Read</span><span>Pham Van Hai</span></p><span><svg width=\"18px\" class=\"icon-item-task\" id=\"task-star\" height=\"18px\" viewBox=\"0 0 18 18\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\"> <g> <path d=\"M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z\"></path> </g> </svg></span>';

var itemTaskUnSuccess = '<span class=\"icon-item-task\"><svg name=\"task-uncheck\" width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);\"> <g> <path d=\"M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z\" style=\"fill:none;stroke-width:1px\"></path> </g> </svg></span><p><span>Read33</span></p><span><svg width=\"18px\" class=\"icon-item-task\" id=\"task-star\" height=\"18px\" viewBox=\"0 0 18 18\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\"> <g> <path d=\"M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z\"></path> </g> </svg></span>';

var iconRedStart = '<svg name=\"start\" width=\"23px\" height=\"46px\" class=\"star-dd\" viewBox=\"0 0 22 44\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\"> <g> <path d=\"M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z\"></path> </g> </svg>';
var iconStart = '<svg width=\"18px\" class=\"icon-item-task\" id=\"task-star\" height=\"18px\" viewBox=\"0 0 18 18\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\"> <g> <path d=\"M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z\"></path> </g> </svg>';

var itemMainRight = '<span><svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);\"> <g> <path d=\"M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.0390.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z\" style=\"fill:none;stroke-width:1px\"></path> </g> </svg></span><input type=\"text\" name=\"\" value=\"Read\" class=\"center-head-content\"><span data-id = "0"><svg width=\"18px\" class=\"task-star\" id=\"task-star\" height=\"18px\" viewBox=\"0 0 18 18\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\"> <g> <path d=\"M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z\"></path> </g> </svg></span></div>';

var nodeComment = '<img src=\"img/user.png\" alt=\"\" width=\"25px\" height=\"25px\"><p><span>Pham Van Hai</span><span>: 1231231sadsadjhksagdsajhkgsakjdgaskjdhgsadhjsagdksajdghsajdksadhjsag2</span></p><span name=\"delete-comment\"><svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"> <g id=\"delete\"> <path d=\"M10.72,9.9975 L13.86,6.8575 C14.04,6.6575 14.04,6.3375 13.86,6.1375 C13.66,5.9575 13.34,5.9575 13.14,6.1375 L10,9.2775 L6.86,6.1375 C6.66,5.9575 6.34,5.9575 6.14,6.1375 C5.96,6.3375 5.96,6.6575 6.14,6.8575 L9.28,9.9975 L6.14,13.1375 C5.96,13.3375 5.96,13.6575 6.14,13.8575 C6.24,13.9575 6.38,13.9975 6.5,13.9975 C6.62,13.9975 6.76,13.9575 6.86,13.8575 L10,10.7175 L13.14,13.8575 C13.24,13.9575 13.38,13.9975 13.5,13.9975 C13.62,13.9975 13.76,13.9575 13.86,13.8575 C14.04,13.6575 14.04,13.3375 13.86,13.1375 L10.72,9.9975 Z\" id=\"4\"></path> </g> </g> </svg></span>	';

var checkBoxSuccess = '<svg name=\"task-check\" width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\"> <g> <path d=\"M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004\"></path> <path d=\"M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5\"></path> </g> </svg>';
var checkboxUnSucces = '<svg name="task-uncheck" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;stroke: rgba(0,0,0,0.35);"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>';

var subtask = '<span></span><span>x</span>';

var cartegoryInbox = '<svg class=\"inbox\" width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"> <g> <path d=\"M10,15 C8.8,15 7.78,14.14 7.56,13 L2.5,13 C2.22,13 2,12.78 2,12.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,12.5 C18,12.78 17.78,13 17.5,13 L12.44,13 C12.22,14.14 11.2,15 10,15 L10,15 Z M3,12 L8,12 C8.28,12 8.5,12.22 8.5,12.5 C8.5,13.32 9.18,14 10,14 C10.82,14 11.5,13.32 11.5,12.5 C11.5,12.22 11.72,12 12,12 L17,12 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,12 Z M5.5,6 C5.22,6 5,5.78 5,5.5 C5,5.22 5.22,5 5.5,5 L14.5,5 C14.78,5 15,5.22 15,5.5 C15,5.78 14.78,6 14.5,6 L5.5,6 Z M5.5,8 C5.22,8 5,7.78 5,7.5 C5,7.22 5.22,7 5.5,7 L14.5,7 C14.78,7 15,7.22 15,7.5 C15,7.78 14.78,8 14.5,8 L5.5,8 Z M5.5,10 C5.22,10 5,9.78 5,9.5 C5,9.22 5.22,9 5.5,9 L14.5,9 C14.78,9 15,9.22 15,9.5 C15,9.78 14.78,10 14.5,10 L5.5,10 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,14.5 C2,14.22 2.22,14 2.5,14 C2.78,14 3,14.22 3,14.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,14.5 C17,14.22 17.22,14 17.5,14 C17.78,14 18,14.22 18,14.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z\" id=\"A\"></path> </g> </g> </svg>';
var categoryToday = '<svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"> <g id=\"today\"> <path d=\"M2.5,7 C2.22,7 2,6.78 2,6.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,6.5 C18,6.78 17.78,7 17.5,7 L2.5,7 Z M3,6 L17,6 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,6 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,8.5 C2,8.22 2.22,8 2.5,8 C2.78,8 3,8.22 3,8.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,8.5 C17,8.22 17.22,8 17.5,8 C17.78,8 18,8.22 18,8.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z\" id=\"E\"></path> </g> </g> </svg>';
var categoryWeek = '<svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"> <g id=\"week\"> <path d=\"M2.5,7 C2.22,7 2,6.78 2,6.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,6.5 C18,6.78 17.78,7 17.5,7 L2.5,7 Z M3,6 L17,6 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,6 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,8.5 C2,8.22 2.22,8 2.5,8 C2.78,8 3,8.22 3,8.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,8.5 C17,8.22 17.22,8 17.5,8 C17.78,8 18,8.22 18,8.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z M5.5,15 C5.22,15 5,14.78 5,14.5 L5,9.5 C5,9.22 5.22,9 5.5,9 C5.78,9 6,9.22 6,9.5 L6,14.5 C6,14.78 5.78,15 5.5,15 L5.5,15 Z M8.5,15 C8.22,15 8,14.78 8,14.5 L8,9.5 C8,9.22 8.22,9 8.5,9 C8.78,9 9,9.22 9,9.5 L9,14.5 C9,14.78 8.78,15 8.5,15 L8.5,15 Z M11.5,15 C11.22,15 11,14.78 11,14.5 L11,9.5 C11,9.22 11.22,9 11.5,9 C11.78,9 12,9.22 12,9.5 L12,14.5 C12,14.78 11.78,15 11.5,15 L11.5,15 Z M14.5,15 C14.22,15 14,14.78 14,14.5 L14,9.5 C14,9.22 14.22,9 14.5,9 C14.78,9 15,9.22 15,9.5 L15,14.5 C15,14.78 14.78,15 14.5,15 L14.5,15 Z\" id=\"F\"></path> </g> </g> </svg>';
var cartegoryMore = '<svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g id=\"Web-svgs\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"> <g id=\"list\"> <path d=\"M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z\" id=\"K\"> </path> </g> </g> </svg>';
var itemCategory = '<p><span><svg class=\"inbox\" width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\"> <g> <path d=\"M10,15 C8.8,15 7.78,14.14 7.56,13 L2.5,13 C2.22,13 2,12.78 2,12.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,12.5 C18,12.78 17.78,13 17.5,13 L12.44,13 C12.22,14.14 11.2,15 10,15 L10,15 Z M3,12 L8,12 C8.28,12 8.5,12.22 8.5,12.5 C8.5,13.32 9.18,14 10,14 C10.82,14 11.5,13.32 11.5,12.5 C11.5,12.22 11.72,12 12,12 L17,12 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,12 Z M5.5,6 C5.22,6 5,5.78 5,5.5 C5,5.22 5.22,5 5.5,5 L14.5,5 C14.78,5 15,5.22 15,5.5 C15,5.78 14.78,6 14.5,6 L5.5,6 Z M5.5,8 C5.22,8 5,7.78 5,7.5 C5,7.22 5.22,7 5.5,7 L14.5,7 C14.78,7 15,7.22 15,7.5 C15,7.78 14.78,8 14.5,8 L5.5,8 Z M5.5,10 C5.22,10 5,9.78 5,9.5 C5,9.22 5.22,9 5.5,9 L14.5,9 C14.78,9 15,9.22 15,9.5 C15,9.78 14.78,10 14.5,10 L5.5,10 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,14.5 C2,14.22 2.22,14 2.5,14 C2.78,14 3,14.22 3,14.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,14.5 C17,14.22 17.22,14 17.5,14 C17.78,14 18,14.22 18,14.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z\" id=\"A\"></path> </g> </g> </svg></span><span class=\"title-menu-side-bar\">Inbox</span></p>';
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const ui = {
    languageSelect: $('languageSelect'), languagePicker: $('languagePicker'), languageButton: $('languageButton'),
    languageMenu: $('languageMenu'), currentFlag: $('currentFlag'), currentLanguage: $('currentLanguage'),
    toolGrid: $('toolGrid'), toolHint: $('toolHint'),
    gridSpacing: $('gridSpacing'), snapGrid: $('snapGrid'), snapPoints: $('snapPoints'),
    propertiesCard: $('propertiesCard'), propertiesSubtitle: $('propertiesSubtitle'), propertiesFields: $('propertiesFields'),
    deleteEntityButton: $('deleteEntityButton'),
    undoButton: $('undoButton'), redoButton: $('redoButton'), clearButton: $('clearButton'),
    saveProjectButton: $('saveProjectButton'), openProjectButton: $('openProjectButton'), openProjectInput: $('openProjectInput'),
    message: $('message'),
    entitiesSubtitle: $('entitiesSubtitle'), fitButton: $('fitButton'), exportButton: $('exportButton'),
    canvas: $('drawCanvas'), canvasWrap: $('canvasWrap'), emptyState: $('emptyState'),
    coordReadout: $('coordReadout'), drawTooltip: $('drawTooltip'),
    metricLines: $('metricLines'), metricRects: $('metricRects'), metricCircles: $('metricCircles'), metricArcs: $('metricArcs')
  };

  const translations = {
    'pt-BR': {
      pageTitle:'LaymanCad 2D', localProcessing:'Processamento 100% local', tools:'Ferramentas', toolsHint:'Escolha o que desenhar', toolSelect:'Selecionar', toolLine:'Linha', toolRect:'Retângulo', toolCircle:'Círculo', toolArc:'Arco', hintSelect:'Clique numa peça e arraste o corpo para mover tudo, ou um ponto (quadrado) para remodelar. Solte um ponto perto de outro para fundi-los. Delete remove, Ctrl+Z desfaz.', hintLine:'Clique no ponto inicial e depois no ponto final da linha.', hintRect:'Clique em um canto e depois no canto oposto do retângulo.', hintCircle:'Clique no centro e depois em um ponto da borda para definir o raio.', hintArc:'Clique no início, no fim e em um ponto por onde o arco deve passar.', grid:'Grade e imã', dimensionsMm:'Dimensões em milímetros', gridSpacing:'Espaçamento', snapToGrid:'Ajustar à grade', snapToPoints:'Ajustar a pontos existentes', properties:'Propriedades', deleteEntity:'Excluir elemento', undo:'Desfazer', redo:'Refazer', clearAll:'Limpar tudo', saveProject:'Salvar projeto', openProject:'Abrir projeto', drawing:'Desenho', addToStart:'Escolha uma ferramenta e comece a desenhar', entitiesCount:'{count} elemento(s) no desenho', fitDrawing:'Enquadrar desenho', exportDxf:'Exportar DXF', emptyTitle:'Seu desenho aparecerá aqui', emptyBody:'Escolha uma ferramenta ao lado, clique no quadro<br>para posicionar os pontos e ajuste os valores exatos em Propriedades.', zoomHint:'Role para ampliar · Arraste o fundo para mover', entityLines:'Linhas', entityRects:'Retângulos', entityCircles:'Círculos', entityArcs:'Arcos', entityLine:'Linha', entityRect:'Retângulo', entityCircle:'Círculo', entityArc:'Arco', fieldX1:'X1 (mm)', fieldY1:'Y1 (mm)', fieldX2:'X2 (mm)', fieldY2:'Y2 (mm)', fieldCenterX:'Centro X (mm)', fieldCenterY:'Centro Y (mm)', fieldRadius:'Raio (mm)', fieldStartAngle:'Ângulo inicial (°)', fieldEndAngle:'Ângulo final (°)', degenerateShape:'A forma não pode ter tamanho zero.', arcCollinear:'Os três pontos estão alinhados; escolha um ponto fora da reta para curvar o arco.', nothingToExport:'Desenhe pelo menos um elemento antes de exportar.', exported:'DXF exportado com sucesso.', projectSaved:'Projeto salvo.', projectLoaded:'Projeto carregado.', invalidProjectFile:'Não foi possível abrir este arquivo de projeto.', confirmClear:'Apagar todos os elementos do desenho? Esta ação não pode ser desfeita.', footerPrivacy:'DXF ASCII · Todos os dados permanecem neste dispositivo'
    },
    'en-US': {
      pageTitle:'LaymanCad 2D', localProcessing:'100% local processing', tools:'Tools', toolsHint:'Choose what to draw', toolSelect:'Select', toolLine:'Line', toolRect:'Rectangle', toolCircle:'Circle', toolArc:'Arc', hintSelect:'Click a shape and drag its body to move it all, or a point (square handle) to reshape it. Drop a point onto another to merge them. Delete removes it, Ctrl+Z undoes.', hintLine:'Click the start point, then the end point of the line.', hintRect:'Click one corner, then the opposite corner of the rectangle.', hintCircle:'Click the center, then a point on the edge to set the radius.', hintArc:'Click the start, the end, and a point the arc should pass through.', grid:'Grid and snap', dimensionsMm:'Dimensions in millimeters', gridSpacing:'Spacing', snapToGrid:'Snap to grid', snapToPoints:'Snap to existing points', properties:'Properties', deleteEntity:'Delete element', undo:'Undo', redo:'Redo', clearAll:'Clear all', saveProject:'Save project', openProject:'Open project', drawing:'Drawing', addToStart:'Choose a tool and start drawing', entitiesCount:'{count} element(s) in the drawing', fitDrawing:'Fit drawing', exportDxf:'Export DXF', emptyTitle:'Your drawing will appear here', emptyBody:'Pick a tool on the left, click the canvas<br>to place the points, then fine-tune exact values in Properties.', zoomHint:'Scroll to zoom · Drag the background to pan', entityLines:'Lines', entityRects:'Rectangles', entityCircles:'Circles', entityArcs:'Arcs', entityLine:'Line', entityRect:'Rectangle', entityCircle:'Circle', entityArc:'Arc', fieldX1:'X1 (mm)', fieldY1:'Y1 (mm)', fieldX2:'X2 (mm)', fieldY2:'Y2 (mm)', fieldCenterX:'Center X (mm)', fieldCenterY:'Center Y (mm)', fieldRadius:'Radius (mm)', fieldStartAngle:'Start angle (°)', fieldEndAngle:'End angle (°)', degenerateShape:'The shape cannot have zero size.', arcCollinear:'The three points are aligned; pick a point off the line to curve the arc.', nothingToExport:'Draw at least one element before exporting.', exported:'DXF exported successfully.', projectSaved:'Project saved.', projectLoaded:'Project loaded.', invalidProjectFile:'This project file could not be opened.', confirmClear:'Delete every element in the drawing? This cannot be undone.', footerPrivacy:'DXF ASCII · All data stays on this device'
    },
    'es-ES': {
      pageTitle:'LaymanCad 2D', localProcessing:'Procesamiento 100% local', tools:'Herramientas', toolsHint:'Elija qué dibujar', toolSelect:'Seleccionar', toolLine:'Línea', toolRect:'Rectángulo', toolCircle:'Círculo', toolArc:'Arco', hintSelect:'Haga clic en una pieza y arrastre el cuerpo para moverla entera, o un punto (cuadrado) para remodelarla. Suelte un punto cerca de otro para fundirlos. Supr elimina, Ctrl+Z deshace.', hintLine:'Haga clic en el punto inicial y luego en el punto final de la línea.', hintRect:'Haga clic en una esquina y luego en la esquina opuesta del rectángulo.', hintCircle:'Haga clic en el centro y luego en un punto del borde para definir el radio.', hintArc:'Haga clic en el inicio, el final y un punto por donde debe pasar el arco.', grid:'Cuadrícula e imán', dimensionsMm:'Dimensiones en milímetros', gridSpacing:'Espaciado', snapToGrid:'Ajustar a la cuadrícula', snapToPoints:'Ajustar a puntos existentes', properties:'Propiedades', deleteEntity:'Eliminar elemento', undo:'Deshacer', redo:'Rehacer', clearAll:'Borrar todo', saveProject:'Guardar proyecto', openProject:'Abrir proyecto', drawing:'Dibujo', addToStart:'Elija una herramienta y empiece a dibujar', entitiesCount:'{count} elemento(s) en el dibujo', fitDrawing:'Ajustar dibujo', exportDxf:'Exportar DXF', emptyTitle:'Su dibujo aparecerá aquí', emptyBody:'Elija una herramienta, haga clic en el lienzo<br>para colocar los puntos y ajuste los valores exactos en Propiedades.', zoomHint:'Desplace para ampliar · Arrastre el fondo para mover', entityLines:'Líneas', entityRects:'Rectángulos', entityCircles:'Círculos', entityArcs:'Arcos', entityLine:'Línea', entityRect:'Rectángulo', entityCircle:'Círculo', entityArc:'Arco', fieldX1:'X1 (mm)', fieldY1:'Y1 (mm)', fieldX2:'X2 (mm)', fieldY2:'Y2 (mm)', fieldCenterX:'Centro X (mm)', fieldCenterY:'Centro Y (mm)', fieldRadius:'Radio (mm)', fieldStartAngle:'Ángulo inicial (°)', fieldEndAngle:'Ángulo final (°)', degenerateShape:'La forma no puede tener tamaño cero.', arcCollinear:'Los tres puntos están alineados; elija un punto fuera de la recta para curvar el arco.', nothingToExport:'Dibuje al menos un elemento antes de exportar.', exported:'DXF exportado con éxito.', projectSaved:'Proyecto guardado.', projectLoaded:'Proyecto cargado.', invalidProjectFile:'No se pudo abrir este archivo de proyecto.', confirmClear:'¿Borrar todos los elementos del dibujo? Esta acción no se puede deshacer.', footerPrivacy:'DXF ASCII · Todos los datos permanecen en este dispositivo'
    },
    'zh-CN': {
      pageTitle:'LaymanCad 2D', localProcessing:'100% 本地处理', tools:'工具', toolsHint:'选择要绘制的内容', toolSelect:'选择', toolLine:'直线', toolRect:'矩形', toolCircle:'圆形', toolArc:'圆弧', hintSelect:'点击图形，拖动主体可整体移动，拖动方形控制点可单独改形；把一个点拖到另一个点上即可将它们融合。Delete 删除，Ctrl+Z 撤销。', hintLine:'点击起点，然后点击直线的终点。', hintRect:'点击一个角，然后点击矩形的对角。', hintCircle:'点击圆心，然后点击边缘上的一点以设置半径。', hintArc:'依次点击起点、终点，以及圆弧应经过的一点。', grid:'网格与吸附', dimensionsMm:'尺寸单位：毫米', gridSpacing:'间距', snapToGrid:'吸附到网格', snapToPoints:'吸附到已有的点', properties:'属性', deleteEntity:'删除元素', undo:'撤销', redo:'重做', clearAll:'清空全部', saveProject:'保存项目', openProject:'打开项目', drawing:'图纸', addToStart:'选择一个工具开始绘制', entitiesCount:'图纸中有 {count} 个元素', fitDrawing:'适合视图', exportDxf:'导出 DXF', emptyTitle:'您的图纸将显示在这里', emptyBody:'在左侧选择工具，点击画布<br>放置点，然后在属性面板中调整精确数值。', zoomHint:'滚动缩放 · 拖动背景平移', entityLines:'直线', entityRects:'矩形', entityCircles:'圆形', entityArcs:'圆弧', entityLine:'直线', entityRect:'矩形', entityCircle:'圆形', entityArc:'圆弧', fieldX1:'X1（毫米）', fieldY1:'Y1（毫米）', fieldX2:'X2（毫米）', fieldY2:'Y2（毫米）', fieldCenterX:'圆心 X（毫米）', fieldCenterY:'圆心 Y（毫米）', fieldRadius:'半径（毫米）', fieldStartAngle:'起始角度（°）', fieldEndAngle:'终止角度（°）', degenerateShape:'图形的尺寸不能为零。', arcCollinear:'这三个点共线；请选择一个不在直线上的点以形成弧线。', nothingToExport:'导出前请至少绘制一个元素。', exported:'DXF 导出成功。', projectSaved:'项目已保存。', projectLoaded:'项目已加载。', invalidProjectFile:'无法打开该项目文件。', confirmClear:'删除图纸中的所有元素？此操作无法撤销。', footerPrivacy:'DXF ASCII · 所有数据仅保留在此设备上'
    },
    'hi-IN': {
      pageTitle:'LaymanCad 2D', localProcessing:'100% स्थानीय प्रोसेसिंग', tools:'उपकरण', toolsHint:'बनाने के लिए चुनें', toolSelect:'चुनें', toolLine:'रेखा', toolRect:'आयत', toolCircle:'वृत्त', toolArc:'चाप', hintSelect:'किसी आकृति पर क्लिक करें और पूरा हिलाने के लिए बॉडी खींचें, या आकार बदलने के लिए किसी बिंदु (वर्ग) को खींचें। एक बिंदु को दूसरे के पास छोड़ने पर वे जुड़ जाते हैं। Delete हटाता है, Ctrl+Z पूर्ववत करता है।', hintLine:'रेखा के आरंभिक बिंदु पर क्लिक करें, फिर अंतिम बिंदु पर।', hintRect:'एक कोने पर क्लिक करें, फिर आयत के विपरीत कोने पर।', hintCircle:'केंद्र पर क्लिक करें, फिर त्रिज्या तय करने के लिए किनारे के एक बिंदु पर।', hintArc:'आरंभ, अंत, और उस बिंदु पर क्लिक करें जिससे होकर चाप गुजरना चाहिए।', grid:'ग्रिड और स्नैप', dimensionsMm:'मिलीमीटर में आयाम', gridSpacing:'दूरी', snapToGrid:'ग्रिड पर स्नैप करें', snapToPoints:'मौजूदा बिंदुओं पर स्नैप करें', properties:'गुण', deleteEntity:'तत्व हटाएँ', undo:'पूर्ववत करें', redo:'फिर से करें', clearAll:'सभी साफ़ करें', saveProject:'प्रोजेक्ट सहेजें', openProject:'प्रोजेक्ट खोलें', drawing:'चित्र', addToStart:'शुरू करने के लिए एक उपकरण चुनें', entitiesCount:'चित्र में {count} तत्व', fitDrawing:'चित्र फिट करें', exportDxf:'DXF निर्यात करें', emptyTitle:'आपका चित्र यहाँ दिखाई देगा', emptyBody:'बाईं ओर एक उपकरण चुनें, बिंदु रखने के लिए कैनवास पर क्लिक करें<br>और गुण पैनल में सटीक मान समायोजित करें।', zoomHint:'ज़ूम के लिए स्क्रॉल करें · पृष्ठभूमि खींचकर घुमाएँ', entityLines:'रेखाएँ', entityRects:'आयत', entityCircles:'वृत्त', entityArcs:'चाप', entityLine:'रेखा', entityRect:'आयत', entityCircle:'वृत्त', entityArc:'चाप', fieldX1:'X1 (मिमी)', fieldY1:'Y1 (मिमी)', fieldX2:'X2 (मिमी)', fieldY2:'Y2 (मिमी)', fieldCenterX:'केंद्र X (मिमी)', fieldCenterY:'केंद्र Y (मिमी)', fieldRadius:'त्रिज्या (मिमी)', fieldStartAngle:'आरंभिक कोण (°)', fieldEndAngle:'अंतिम कोण (°)', degenerateShape:'आकृति का आकार शून्य नहीं हो सकता।', arcCollinear:'तीनों बिंदु एक सीध में हैं; चाप मोड़ने के लिए रेखा से हटकर एक बिंदु चुनें।', nothingToExport:'निर्यात करने से पहले कम से कम एक तत्व बनाएँ।', exported:'DXF सफलतापूर्वक निर्यात हुआ।', projectSaved:'प्रोजेक्ट सहेजा गया।', projectLoaded:'प्रोजेक्ट लोड हुआ।', invalidProjectFile:'यह प्रोजेक्ट फ़ाइल नहीं खोली जा सकी।', confirmClear:'चित्र के सभी तत्व हटाएँ? यह पूर्ववत नहीं किया जा सकता।', footerPrivacy:'DXF ASCII · सभी डेटा इस डिवाइस पर रहता है'
    },
    'ar-SA': {
      pageTitle:'LaymanCad 2D', localProcessing:'معالجة محلية 100%', tools:'الأدوات', toolsHint:'اختر ما تريد رسمه', toolSelect:'تحديد', toolLine:'خط', toolRect:'مستطيل', toolCircle:'دائرة', toolArc:'قوس', hintSelect:'انقر على شكل واسحب جسمه لتحريكه بالكامل، أو اسحب نقطة (مربع) لإعادة تشكيله. أفلت نقطة قرب أخرى لدمجهما. Delete للحذف، Ctrl+Z للتراجع.', hintLine:'انقر على نقطة البداية ثم نقطة نهاية الخط.', hintRect:'انقر على إحدى الزوايا ثم الزاوية المقابلة للمستطيل.', hintCircle:'انقر على المركز ثم على نقطة على الحافة لتحديد نصف القطر.', hintArc:'انقر على البداية، والنهاية، ونقطة يجب أن يمر بها القوس.', grid:'الشبكة والالتصاق', dimensionsMm:'الأبعاد بالمليمتر', gridSpacing:'التباعد', snapToGrid:'الالتصاق بالشبكة', snapToPoints:'الالتصاق بالنقاط الموجودة', properties:'الخصائص', deleteEntity:'حذف العنصر', undo:'تراجع', redo:'إعادة', clearAll:'مسح الكل', saveProject:'حفظ المشروع', openProject:'فتح مشروع', drawing:'الرسم', addToStart:'اختر أداة وابدأ الرسم', entitiesCount:'{count} عنصر في الرسم', fitDrawing:'ملاءمة الرسم', exportDxf:'تصدير DXF', emptyTitle:'سيظهر رسمك هنا', emptyBody:'اختر أداة من القائمة، وانقر على اللوحة<br>لوضع النقاط، ثم اضبط القيم الدقيقة في الخصائص.', zoomHint:'مرّر للتكبير · اسحب الخلفية للتحريك', entityLines:'خطوط', entityRects:'مستطيلات', entityCircles:'دوائر', entityArcs:'أقواس', entityLine:'خط', entityRect:'مستطيل', entityCircle:'دائرة', entityArc:'قوس', fieldX1:'X1 (مم)', fieldY1:'Y1 (مم)', fieldX2:'X2 (مم)', fieldY2:'Y2 (مم)', fieldCenterX:'مركز X (مم)', fieldCenterY:'مركز Y (مم)', fieldRadius:'نصف القطر (مم)', fieldStartAngle:'زاوية البداية (°)', fieldEndAngle:'زاوية النهاية (°)', degenerateShape:'لا يمكن أن يكون حجم الشكل صفرًا.', arcCollinear:'النقاط الثلاث على استقامة واحدة؛ اختر نقطة خارج الخط لتقويس القوس.', nothingToExport:'ارسم عنصرًا واحدًا على الأقل قبل التصدير.', exported:'تم تصدير DXF بنجاح.', projectSaved:'تم حفظ المشروع.', projectLoaded:'تم تحميل المشروع.', invalidProjectFile:'تعذّر فتح ملف المشروع هذا.', confirmClear:'هل تريد حذف جميع عناصر الرسم؟ لا يمكن التراجع عن هذا الإجراء.', footerPrivacy:'DXF ASCII · تبقى جميع البيانات على هذا الجهاز'
    },
    'fr-FR': {
      pageTitle:'LaymanCad 2D', localProcessing:'Traitement 100 % local', tools:'Outils', toolsHint:'Choisissez ce que vous dessinez', toolSelect:'Sélectionner', toolLine:'Ligne', toolRect:'Rectangle', toolCircle:'Cercle', toolArc:'Arc', hintSelect:"Cliquez sur une forme et faites glisser son corps pour la déplacer entière, ou un point (carré) pour la remodeler. Déposez un point près d'un autre pour les fusionner. Suppr efface, Ctrl+Z annule.", hintLine:"Cliquez sur le point de départ, puis sur le point final de la ligne.", hintRect:"Cliquez sur un coin, puis sur le coin opposé du rectangle.", hintCircle:"Cliquez sur le centre, puis sur un point du bord pour définir le rayon.", hintArc:"Cliquez sur le début, la fin, puis un point par lequel l'arc doit passer.", grid:'Grille et aimantation', dimensionsMm:'Dimensions en millimètres', gridSpacing:'Espacement', snapToGrid:'Aimanter à la grille', snapToPoints:'Aimanter aux points existants', properties:'Propriétés', deleteEntity:"Supprimer l'élément", undo:'Annuler', redo:'Rétablir', clearAll:'Tout effacer', saveProject:'Enregistrer le projet', openProject:'Ouvrir un projet', drawing:'Dessin', addToStart:'Choisissez un outil et commencez à dessiner', entitiesCount:'{count} élément(s) dans le dessin', fitDrawing:'Ajuster le dessin', exportDxf:'Exporter en DXF', emptyTitle:'Votre dessin apparaîtra ici', emptyBody:"Choisissez un outil à gauche, cliquez sur le plan<br>pour placer les points, puis ajustez les valeurs exactes dans Propriétés.", zoomHint:'Défilez pour zoomer · Faites glisser le fond pour déplacer', entityLines:'Lignes', entityRects:'Rectangles', entityCircles:'Cercles', entityArcs:'Arcs', entityLine:'Ligne', entityRect:'Rectangle', entityCircle:'Cercle', entityArc:'Arc', fieldX1:'X1 (mm)', fieldY1:'Y1 (mm)', fieldX2:'X2 (mm)', fieldY2:'Y2 (mm)', fieldCenterX:'Centre X (mm)', fieldCenterY:'Centre Y (mm)', fieldRadius:'Rayon (mm)', fieldStartAngle:'Angle de départ (°)', fieldEndAngle:'Angle de fin (°)', degenerateShape:"La forme ne peut pas avoir une taille nulle.", arcCollinear:"Les trois points sont alignés ; choisissez un point hors de la droite pour courber l'arc.", nothingToExport:"Dessinez au moins un élément avant d'exporter.", exported:'DXF exporté avec succès.', projectSaved:'Projet enregistré.', projectLoaded:'Projet chargé.', invalidProjectFile:"Ce fichier de projet n'a pas pu être ouvert.", confirmClear:'Supprimer tous les éléments du dessin ? Cette action est irréversible.', footerPrivacy:'DXF ASCII · Toutes les données restent sur cet appareil'
    },
    'bn-BD': {
      pageTitle:'LaymanCad 2D', localProcessing:'100% লোকাল প্রসেসিং', tools:'সরঞ্জাম', toolsHint:'কী আঁকবেন তা বেছে নিন', toolSelect:'নির্বাচন করুন', toolLine:'রেখা', toolRect:'আয়ত', toolCircle:'বৃত্ত', toolArc:'চাপ', hintSelect:'কোনো আকৃতিতে ক্লিক করে পুরোটা সরাতে বডি টানুন, বা আকার বদলাতে একটি বিন্দু (বর্গক্ষেত্র) টানুন। একটি বিন্দু অন্যটির কাছে ছাড়লে সেগুলো যুক্ত হয়ে যায়। Delete মুছে দেয়, Ctrl+Z পূর্বাবস্থায় ফেরায়।', hintLine:'রেখার শুরুর বিন্দুতে ক্লিক করুন, তারপর শেষ বিন্দুতে।', hintRect:'একটি কোণে ক্লিক করুন, তারপর আয়তের বিপরীত কোণে।', hintCircle:'কেন্দ্রে ক্লিক করুন, তারপর ব্যাসার্ধ ঠিক করতে প্রান্তের একটি বিন্দুতে।', hintArc:'শুরু, শেষ, এবং যে বিন্দু দিয়ে চাপ যাবে সেখানে ক্লিক করুন।', grid:'গ্রিড ও স্ন্যাপ', dimensionsMm:'মিলিমিটারে মাপ', gridSpacing:'ব্যবধান', snapToGrid:'গ্রিডে স্ন্যাপ করুন', snapToPoints:'বিদ্যমান বিন্দুতে স্ন্যাপ করুন', properties:'বৈশিষ্ট্য', deleteEntity:'উপাদান মুছুন', undo:'পূর্বাবস্থায় ফেরান', redo:'পুনরায় করুন', clearAll:'সব মুছুন', saveProject:'প্রকল্প সংরক্ষণ করুন', openProject:'প্রকল্প খুলুন', drawing:'অঙ্কন', addToStart:'শুরু করতে একটি সরঞ্জাম বেছে নিন', entitiesCount:'অঙ্কনে {count}টি উপাদান', fitDrawing:'অঙ্কন ফিট করুন', exportDxf:'DXF রপ্তানি করুন', emptyTitle:'আপনার অঙ্কন এখানে দেখা যাবে', emptyBody:'বাম দিকে একটি সরঞ্জাম বেছে নিন, বিন্দু বসাতে ক্যানভাসে ক্লিক করুন<br>এবং বৈশিষ্ট্য প্যানেলে সঠিক মান ঠিক করুন।', zoomHint:'জুম করতে স্ক্রল করুন · সরাতে ব্যাকগ্রাউন্ড টেনে আনুন', entityLines:'রেখা', entityRects:'আয়ত', entityCircles:'বৃত্ত', entityArcs:'চাপ', entityLine:'রেখা', entityRect:'আয়ত', entityCircle:'বৃত্ত', entityArc:'চাপ', fieldX1:'X1 (মিমি)', fieldY1:'Y1 (মিমি)', fieldX2:'X2 (মিমি)', fieldY2:'Y2 (মিমি)', fieldCenterX:'কেন্দ্র X (মিমি)', fieldCenterY:'কেন্দ্র Y (মিমি)', fieldRadius:'ব্যাসার্ধ (মিমি)', fieldStartAngle:'শুরুর কোণ (°)', fieldEndAngle:'শেষের কোণ (°)', degenerateShape:'আকৃতির আকার শূন্য হতে পারে না।', arcCollinear:'তিনটি বিন্দু একই রেখায় আছে; চাপ বাঁকাতে রেখার বাইরের একটি বিন্দু বেছে নিন।', nothingToExport:'রপ্তানি করার আগে অন্তত একটি উপাদান আঁকুন।', exported:'DXF সফলভাবে রপ্তানি হয়েছে।', projectSaved:'প্রকল্প সংরক্ষিত হয়েছে।', projectLoaded:'প্রকল্প লোড হয়েছে।', invalidProjectFile:'এই প্রকল্প ফাইলটি খোলা যায়নি।', confirmClear:'অঙ্কনের সব উপাদান মুছবেন? এটি পূর্বাবস্থায় ফেরানো যাবে না।', footerPrivacy:'DXF ASCII · সব ডেটা এই ডিভাইসে থাকে'
    },
    'ru-RU': {
      pageTitle:'LaymanCad 2D', localProcessing:'100% локальная обработка', tools:'Инструменты', toolsHint:'Выберите, что рисовать', toolSelect:'Выбор', toolLine:'Линия', toolRect:'Прямоугольник', toolCircle:'Круг', toolArc:'Дуга', hintSelect:'Щёлкните по фигуре и тащите её тело, чтобы переместить целиком, или точку (квадрат), чтобы изменить форму. Отпустите точку рядом с другой, чтобы их соединить. Delete удаляет, Ctrl+Z отменяет.', hintLine:'Щёлкните начальную точку, затем конечную точку линии.', hintRect:'Щёлкните один угол, затем противоположный угол прямоугольника.', hintCircle:'Щёлкните центр, затем точку на краю, чтобы задать радиус.', hintArc:'Щёлкните начало, конец и точку, через которую должна пройти дуга.', grid:'Сетка и привязка', dimensionsMm:'Размеры в миллиметрах', gridSpacing:'Шаг', snapToGrid:'Привязка к сетке', snapToPoints:'Привязка к существующим точкам', properties:'Свойства', deleteEntity:'Удалить элемент', undo:'Отменить', redo:'Повторить', clearAll:'Очистить всё', saveProject:'Сохранить проект', openProject:'Открыть проект', drawing:'Чертёж', addToStart:'Выберите инструмент и начните рисовать', entitiesCount:'В чертеже {count} элемент(ов)', fitDrawing:'Вписать чертёж', exportDxf:'Экспорт DXF', emptyTitle:'Здесь появится ваш чертёж', emptyBody:'Выберите инструмент слева, щёлкайте по холсту<br>для размещения точек и уточните значения в разделе «Свойства».', zoomHint:'Колесо — масштаб · Перетаскивание фона — панорама', entityLines:'Линии', entityRects:'Прямоугольники', entityCircles:'Круги', entityArcs:'Дуги', entityLine:'Линия', entityRect:'Прямоугольник', entityCircle:'Круг', entityArc:'Дуга', fieldX1:'X1 (мм)', fieldY1:'Y1 (мм)', fieldX2:'X2 (мм)', fieldY2:'Y2 (мм)', fieldCenterX:'Центр X (мм)', fieldCenterY:'Центр Y (мм)', fieldRadius:'Радиус (мм)', fieldStartAngle:'Начальный угол (°)', fieldEndAngle:'Конечный угол (°)', degenerateShape:'Размер фигуры не может быть нулевым.', arcCollinear:'Три точки лежат на одной прямой; выберите точку вне линии, чтобы изогнуть дугу.', nothingToExport:'Нарисуйте хотя бы один элемент перед экспортом.', exported:'DXF успешно экспортирован.', projectSaved:'Проект сохранён.', projectLoaded:'Проект загружен.', invalidProjectFile:'Не удалось открыть этот файл проекта.', confirmClear:'Удалить все элементы чертежа? Это действие нельзя отменить.', footerPrivacy:'DXF ASCII · Все данные остаются на этом устройстве'
    },
    'de-DE': {
      pageTitle:'LaymanCad 2D', localProcessing:'100 % lokale Verarbeitung', tools:'Werkzeuge', toolsHint:'Wählen Sie, was Sie zeichnen möchten', toolSelect:'Auswählen', toolLine:'Linie', toolRect:'Rechteck', toolCircle:'Kreis', toolArc:'Bogen', hintSelect:'Klicken Sie auf eine Form und ziehen Sie den Körper, um sie ganz zu verschieben, oder einen Punkt (Quadrat), um sie umzuformen. Lassen Sie einen Punkt nahe einem anderen los, um sie zu verschmelzen. Entf löscht, Strg+Z macht rückgängig.', hintLine:'Klicken Sie auf den Startpunkt und dann auf den Endpunkt der Linie.', hintRect:'Klicken Sie auf eine Ecke und dann auf die gegenüberliegende Ecke des Rechtecks.', hintCircle:'Klicken Sie auf den Mittelpunkt und dann auf einen Punkt am Rand, um den Radius festzulegen.', hintArc:'Klicken Sie auf Start, Ende und einen Punkt, durch den der Bogen verlaufen soll.', grid:'Raster und Fang', dimensionsMm:'Maße in Millimetern', gridSpacing:'Abstand', snapToGrid:'Am Raster einrasten', snapToPoints:'An vorhandenen Punkten einrasten', properties:'Eigenschaften', deleteEntity:'Element löschen', undo:'Rückgängig', redo:'Wiederholen', clearAll:'Alles löschen', saveProject:'Projekt speichern', openProject:'Projekt öffnen', drawing:'Zeichnung', addToStart:'Wählen Sie ein Werkzeug und beginnen Sie zu zeichnen', entitiesCount:'{count} Element(e) in der Zeichnung', fitDrawing:'Zeichnung einpassen', exportDxf:'DXF exportieren', emptyTitle:'Ihre Zeichnung erscheint hier', emptyBody:'Wählen Sie links ein Werkzeug, klicken Sie auf die Fläche,<br>um Punkte zu setzen, und stellen Sie exakte Werte unter Eigenschaften ein.', zoomHint:'Scrollen zum Zoomen · Hintergrund ziehen zum Verschieben', entityLines:'Linien', entityRects:'Rechtecke', entityCircles:'Kreise', entityArcs:'Bögen', entityLine:'Linie', entityRect:'Rechteck', entityCircle:'Kreis', entityArc:'Bogen', fieldX1:'X1 (mm)', fieldY1:'Y1 (mm)', fieldX2:'X2 (mm)', fieldY2:'Y2 (mm)', fieldCenterX:'Mittelpunkt X (mm)', fieldCenterY:'Mittelpunkt Y (mm)', fieldRadius:'Radius (mm)', fieldStartAngle:'Startwinkel (°)', fieldEndAngle:'Endwinkel (°)', degenerateShape:'Die Form darf keine Größe von null haben.', arcCollinear:'Die drei Punkte liegen auf einer Linie; wählen Sie einen Punkt abseits der Linie, um den Bogen zu krümmen.', nothingToExport:'Zeichnen Sie mindestens ein Element, bevor Sie exportieren.', exported:'DXF erfolgreich exportiert.', projectSaved:'Projekt gespeichert.', projectLoaded:'Projekt geladen.', invalidProjectFile:'Diese Projektdatei konnte nicht geöffnet werden.', confirmClear:'Alle Elemente der Zeichnung löschen? Dies kann nicht rückgängig gemacht werden.', footerPrivacy:'DXF ASCII · Alle Daten bleiben auf diesem Gerät'
    },
    'it-IT': {
      pageTitle:'LaymanCad 2D', localProcessing:'Elaborazione 100% locale', tools:'Strumenti', toolsHint:'Scegli cosa disegnare', toolSelect:'Seleziona', toolLine:'Linea', toolRect:'Rettangolo', toolCircle:'Cerchio', toolArc:'Arco', hintSelect:"Fai clic su una forma e trascina il corpo per spostarla tutta, oppure un punto (quadrato) per rimodellarla. Rilascia un punto vicino a un altro per fonderli. Canc elimina, Ctrl+Z annulla.", hintLine:'Fai clic sul punto iniziale e poi sul punto finale della linea.', hintRect:"Fai clic su un angolo e poi sull'angolo opposto del rettangolo.", hintCircle:'Fai clic sul centro e poi su un punto del bordo per impostare il raggio.', hintArc:"Fai clic sull'inizio, sulla fine e su un punto attraverso cui deve passare l'arco.", grid:'Griglia e aggancio', dimensionsMm:'Dimensioni in millimetri', gridSpacing:'Spaziatura', snapToGrid:'Aggancia alla griglia', snapToPoints:'Aggancia ai punti esistenti', properties:'Proprietà', deleteEntity:'Elimina elemento', undo:'Annulla', redo:'Ripeti', clearAll:'Cancella tutto', saveProject:'Salva progetto', openProject:'Apri progetto', drawing:'Disegno', addToStart:'Scegli uno strumento e inizia a disegnare', entitiesCount:'{count} elemento/i nel disegno', fitDrawing:'Adatta disegno', exportDxf:'Esporta DXF', emptyTitle:'Il tuo disegno apparirà qui', emptyBody:"Scegli uno strumento a sinistra, fai clic sull'area<br>per posizionare i punti e regola i valori esatti in Proprietà.", zoomHint:'Scorri per ingrandire · Trascina lo sfondo per spostare', entityLines:'Linee', entityRects:'Rettangoli', entityCircles:'Cerchi', entityArcs:'Archi', entityLine:'Linea', entityRect:'Rettangolo', entityCircle:'Cerchio', entityArc:'Arco', fieldX1:'X1 (mm)', fieldY1:'Y1 (mm)', fieldX2:'X2 (mm)', fieldY2:'Y2 (mm)', fieldCenterX:'Centro X (mm)', fieldCenterY:'Centro Y (mm)', fieldRadius:'Raggio (mm)', fieldStartAngle:'Angolo iniziale (°)', fieldEndAngle:'Angolo finale (°)', degenerateShape:'La forma non può avere dimensione zero.', arcCollinear:"I tre punti sono allineati; scegli un punto fuori dalla retta per curvare l'arco.", nothingToExport:'Disegna almeno un elemento prima di esportare.', exported:'DXF esportato con successo.', projectSaved:'Progetto salvato.', projectLoaded:'Progetto caricato.', invalidProjectFile:'Impossibile aprire questo file di progetto.', confirmClear:'Eliminare tutti gli elementi del disegno? Questa azione non può essere annullata.', footerPrivacy:'DXF ASCII · Tutti i dati restano su questo dispositivo'
    },
    'ja-JP': {
      pageTitle:'LaymanCad 2D', localProcessing:'100% ローカル処理', tools:'ツール', toolsHint:'描画するものを選択', toolSelect:'選択', toolLine:'線', toolRect:'長方形', toolCircle:'円', toolArc:'円弧', hintSelect:'図形をクリックし、本体をドラッグすると全体を移動、点（四角いハンドル）をドラッグすると形を変えられます。点を別の点の近くで離すと融合します。Delete で削除、Ctrl+Z で元に戻します。', hintLine:'線の始点をクリックし、次に終点をクリックします。', hintRect:'長方形の角をクリックし、次に対角をクリックします。', hintCircle:'中心をクリックし、次に半径を決める縁上の点をクリックします。', hintArc:'始点、終点、円弧が通る点の順にクリックします。', grid:'グリッドとスナップ', dimensionsMm:'寸法（mm）', gridSpacing:'間隔', snapToGrid:'グリッドにスナップ', snapToPoints:'既存の点にスナップ', properties:'プロパティ', deleteEntity:'要素を削除', undo:'元に戻す', redo:'やり直す', clearAll:'すべて消去', saveProject:'プロジェクトを保存', openProject:'プロジェクトを開く', drawing:'図面', addToStart:'ツールを選んで描き始めましょう', entitiesCount:'図面内に {count} 個の要素', fitDrawing:'図面をフィット', exportDxf:'DXF をエクスポート', emptyTitle:'ここに図面が表示されます', emptyBody:'左のツールを選び、キャンバスをクリックして<br>点を配置し、プロパティで正確な数値を調整してください。', zoomHint:'スクロールで拡大 · 背景をドラッグで移動', entityLines:'線', entityRects:'長方形', entityCircles:'円', entityArcs:'円弧', entityLine:'線', entityRect:'長方形', entityCircle:'円', entityArc:'円弧', fieldX1:'X1（mm）', fieldY1:'Y1（mm）', fieldX2:'X2（mm）', fieldY2:'Y2（mm）', fieldCenterX:'中心 X（mm）', fieldCenterY:'中心 Y（mm）', fieldRadius:'半径（mm）', fieldStartAngle:'開始角度（°）', fieldEndAngle:'終了角度（°）', degenerateShape:'図形のサイズを0にすることはできません。', arcCollinear:'3点が一直線上にあります。円弧を曲げるには直線から外れた点を選んでください。', nothingToExport:'エクスポートする前に少なくとも1つの要素を描いてください。', exported:'DXF のエクスポートに成功しました。', projectSaved:'プロジェクトを保存しました。', projectLoaded:'プロジェクトを読み込みました。', invalidProjectFile:'このプロジェクトファイルを開けませんでした。', confirmClear:'図面のすべての要素を削除しますか？この操作は元に戻せません。', footerPrivacy:'DXF ASCII · すべてのデータはこのデバイス内に保存されます'
    }
  };

  const languageCodes = Object.keys(translations);
  const languageMeta = {
    'pt-BR': { label:'Português', flag:'br' }, 'en-US': { label:'English', flag:'us' },
    'es-ES': { label:'Español', flag:'es' }, 'zh-CN': { label:'中文', flag:'cn' },
    'hi-IN': { label:'हिन्दी', flag:'in' }, 'ar-SA': { label:'العربية', flag:'sa' },
    'fr-FR': { label:'Français', flag:'fr' }, 'bn-BD': { label:'বাংলা', flag:'bd' },
    'ru-RU': { label:'Русский', flag:'ru' }, 'de-DE': { label:'Deutsch', flag:'de' },
    'it-IT': { label:'Italiano', flag:'it' }, 'ja-JP': { label:'日本語', flag:'jp' }
  };
  function initialLanguage() {
    let saved = '';
    try { saved = localStorage.getItem('laymancad-language') || ''; } catch (_) {}
    if (languageCodes.includes(saved)) return saved;
    const browser = navigator.language || 'pt-BR';
    return languageCodes.find(code => code.toLowerCase() === browser.toLowerCase()) || languageCodes.find(code => code.split('-')[0] === browser.split('-')[0]) || 'pt-BR';
  }

  const STORAGE_KEY = 'laymancad-project';
  const typeColor = { line:'#157f7b', rect:'#c9762f', circle:'#5574a0', arc:'#8a6a36' };
  const typeFill = { rect:'rgba(243,107,43,.07)', circle:'rgba(85,116,160,.08)' };

  const state = {
    entities: [], welds: [], nextId: 1, selectedId: null, hoverId: null,
    language: initialLanguage(), tool: 'select',
    draft: null, dragging: null, pointDrag: null, panning: false, panLast: { x:0, y:0 },
    history: [], historyIndex: -1,
    view: { scale: 2, offsetX: 0, offsetY: 0 }
  };
  let viewInitialized = false;

  function t(key, values = {}) {
    const template = translations[state.language]?.[key] ?? translations['en-US'][key] ?? translations['pt-BR'][key] ?? key;
    return String(template).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? `{${name}}`);
  }
  function fmt(value, digits = 1) { return Number(value).toLocaleString(state.language, { maximumFractionDigits: digits }); }
  function round2(v) { return Math.round(v * 100) / 100; }
  function setMessage(text, type = '') { ui.message.textContent = text; ui.message.className = `message ${type}`.trim(); }

  function applyLanguage(language, persist = true) {
    state.language = languageCodes.includes(language) ? language : 'pt-BR';
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language.startsWith('ar') ? 'rtl' : 'ltr';
    ui.languageSelect.value = state.language;
    const meta = languageMeta[state.language];
    ui.currentFlag.src = `flags/${meta.flag}.svg`;
    ui.currentFlag.alt = '';
    ui.currentLanguage.textContent = meta.label;
    ui.languageMenu.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.language === state.language)));
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = t(element.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(element => { element.innerHTML = t(element.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-title]').forEach(element => { element.title = t(element.dataset.i18nTitle); });
    ui.languageButton.setAttribute('aria-label', `Language: ${meta.label}`);
    if (persist) try { localStorage.setItem('laymancad-language', state.language); } catch (_) {}
    updateToolHint();
    updateEntitiesSubtitle();
    renderProperties();
    draw();
  }
  function setLanguageMenu(open) {
    ui.languageMenu.hidden = !open;
    ui.languageButton.setAttribute('aria-expanded', String(open));
    if (open) ui.languageMenu.querySelector(`[data-language="${state.language}"]`)?.focus();
  }

  // ---------- geometry helpers ----------
  function dist(a, b) { return Math.hypot(b.x - a.x, b.y - a.y); }
  function normalizeAngle(deg) { return ((deg % 360) + 360) % 360; }
  function angleOfPoint(center, p) { return normalizeAngle(Math.atan2(p.y - center.y, p.x - center.x) * 180 / Math.PI); }
  function pointOnCircle(cx, cy, r, deg) { const rad = deg * Math.PI / 180; return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }; }
  function circumcenter(p1, p2, p3) {
    const ax = p1.x, ay = p1.y, bx = p2.x, by = p2.y, cx = p3.x, cy = p3.y;
    const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
    if (Math.abs(d) < 1e-9) return null;
    const ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d;
    const uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d;
    return { x: ux, y: uy };
  }
  function arcSamplePoints(cx, cy, r, a1, a2, segments = 64) {
    const sweep = (a2 - a1 + 360) % 360;
    const pts = [];
    for (let i = 0; i <= segments; i++) pts.push(pointOnCircle(cx, cy, r, a1 + sweep * (i / segments)));
    return pts;
  }
  function resolveArc(p1, p2, p3) {
    const c = circumcenter(p1, p2, p3);
    if (!c) return null;
    const a1raw = angleOfPoint(c, p1), a2raw = angleOfPoint(c, p2), a3 = angleOfPoint(c, p3);
    const sweep = (a2raw - a1raw + 360) % 360;
    const a3rel = (a3 - a1raw + 360) % 360;
    const forward = a3rel > 0 && a3rel < sweep;
    const start = forward ? a1raw : a2raw, end = forward ? a2raw : a1raw;
    return { cx: c.x, cy: c.y, r: dist(c, p1), a1: normalizeAngle(start), a2: normalizeAngle(end) };
  }

  // ---------- point-level handles (drag single vertex vs. whole entity) ----------
  const POINT_KEYS = { line: ['p1', 'p2'], rect: ['c1', 'c2', 'c3', 'c4'], circle: ['center', 'radius'], arc: ['center', 'start', 'end'] };
  const WELDABLE_KEYS = { line: ['p1', 'p2'], rect: ['c1', 'c2', 'c3', 'c4'], circle: ['center'], arc: ['center', 'start', 'end'] };
  function pointKeysOf(e) { return POINT_KEYS[e.type] || []; }
  function getPoint(e, key) {
    if (e.type === 'line') return key === 'p1' ? { x: e.x1, y: e.y1 } : { x: e.x2, y: e.y2 };
    if (e.type === 'rect') {
      if (key === 'c1') return { x: e.x1, y: e.y1 };
      if (key === 'c2') return { x: e.x2, y: e.y1 };
      if (key === 'c3') return { x: e.x2, y: e.y2 };
      return { x: e.x1, y: e.y2 };
    }
    if (e.type === 'circle') return key === 'center' ? { x: e.cx, y: e.cy } : pointOnCircle(e.cx, e.cy, e.r, 0);
    if (key === 'center') return { x: e.cx, y: e.cy };
    return pointOnCircle(e.cx, e.cy, e.r, key === 'start' ? e.a1 : e.a2);
  }
  function setPoint(e, key, x, y) {
    if (e.type === 'line') { if (key === 'p1') { e.x1 = x; e.y1 = y; } else { e.x2 = x; e.y2 = y; } }
    else if (e.type === 'rect') {
      if (key === 'c1') { e.x1 = x; e.y1 = y; }
      else if (key === 'c2') { e.x2 = x; e.y1 = y; }
      else if (key === 'c3') { e.x2 = x; e.y2 = y; }
      else { e.x1 = x; e.y2 = y; }
    } else if (e.type === 'circle') {
      if (key === 'center') { e.cx = x; e.cy = y; }
      else e.r = Math.max(0.001, dist({ x: e.cx, y: e.cy }, { x, y }));
    } else if (key === 'center') { e.cx = x; e.cy = y; }
    else {
      const cur = pointOnCircle(e.cx, e.cy, e.r, key === 'start' ? e.a1 : e.a2);
      e.cx += x - cur.x; e.cy += y - cur.y;
    }
  }
  function entityCandidatePoints(e) { return (WELDABLE_KEYS[e.type] || []).map(key => getPoint(e, key)); }

  // ---------- point welding (merge coincident points so they move together) ----------
  function findWeldGroup(id, key) { return state.welds.findIndex(g => g.some(m => m.id === id && m.key === key)); }
  function isWelded(id, key) { return findWeldGroup(id, key) !== -1; }
  function weldPoints(idA, keyA, idB, keyB) {
    if (idA === idB && keyA === keyB) return false;
    const gi = findWeldGroup(idA, keyA), gj = findWeldGroup(idB, keyB);
    if (gi === -1 && gj === -1) { state.welds.push([{ id: idA, key: keyA }, { id: idB, key: keyB }]); return true; }
    if (gi !== -1 && gj === -1) { state.welds[gi].push({ id: idB, key: keyB }); return true; }
    if (gi === -1 && gj !== -1) { state.welds[gj].push({ id: idA, key: keyA }); return true; }
    if (gi !== gj) { state.welds[gi] = state.welds[gi].concat(state.welds[gj]); state.welds.splice(gj, 1); return true; }
    return false;
  }
  function autoWeldEntity(entityId) {
    const entity = state.entities.find(e => e.id === entityId); if (!entity) return false;
    let changed = false;
    for (const key of WELDABLE_KEYS[entity.type] || []) {
      const p = getPoint(entity, key);
      for (const other of state.entities) {
        if (other.id === entityId) continue;
        for (const okey of WELDABLE_KEYS[other.type] || []) {
          if (dist(p, getPoint(other, okey)) < 1e-6 && weldPoints(entityId, key, other.id, okey)) changed = true;
        }
      }
    }
    return changed;
  }
  function propagateWeld(entityId, key, x, y) {
    const gi = findWeldGroup(entityId, key);
    if (gi === -1) return;
    state.welds[gi].forEach(m => {
      if (m.id === entityId && m.key === key) return;
      const e = state.entities.find(en => en.id === m.id);
      if (e) setPoint(e, m.key, x, y);
    });
  }
  function propagateAllPoints(entity) {
    (WELDABLE_KEYS[entity.type] || []).forEach(key => { const p = getPoint(entity, key); propagateWeld(entity.id, key, p.x, p.y); });
  }
  function snapWholeEntityDelta(entity, orig, dx, dy) {
    const tolWorld = 10 / state.view.scale;
    let bestD = tolWorld, bestDx = dx, bestDy = dy;
    for (const key of WELDABLE_KEYS[entity.type] || []) {
      const origP = getPoint(orig, key);
      const candidate = { x: origP.x + dx, y: origP.y + dy };
      for (const other of state.entities) {
        if (other.id === entity.id) continue;
        for (const okey of WELDABLE_KEYS[other.type] || []) {
          const target = getPoint(other, okey);
          const d = dist(candidate, target);
          if (d < bestD) { bestD = d; bestDx = target.x - origP.x; bestDy = target.y - origP.y; }
        }
      }
    }
    return { dx: bestDx, dy: bestDy };
  }
  function removeFromWelds(entityId) {
    state.welds = state.welds.map(g => g.filter(m => m.id !== entityId)).filter(g => g.length > 1);
  }
  function entityPolyline(e) {
    if (e.type === 'line') return [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }];
    if (e.type === 'rect') return [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y1 }, { x: e.x2, y: e.y2 }, { x: e.x1, y: e.y2 }, { x: e.x1, y: e.y1 }];
    if (e.type === 'arc') return arcSamplePoints(e.cx, e.cy, e.r, e.a1, e.a2, 64);
    return null;
  }
  function distPointSegment(p, a, b) {
    const abx = b.x - a.x, aby = b.y - a.y, len2 = abx * abx + aby * aby;
    let tt = len2 > 1e-12 ? ((p.x - a.x) * abx + (p.y - a.y) * aby) / len2 : 0;
    tt = Math.max(0, Math.min(1, tt));
    return Math.hypot(p.x - (a.x + abx * tt), p.y - (a.y + aby * tt));
  }
  function distancePointToPolyline(pt, poly) {
    let best = Infinity;
    for (let i = 0; i < poly.length - 1; i++) best = Math.min(best, distPointSegment(pt, poly[i], poly[i + 1]));
    return best;
  }
  function hitTest(pt, tol) {
    for (let i = state.entities.length - 1; i >= 0; i--) {
      const e = state.entities[i];
      if (e.type === 'circle') {
        if (dist(pt, { x: e.cx, y: e.cy }) <= e.r + tol) return e;
      } else if (e.type === 'rect') {
        const minX = Math.min(e.x1, e.x2) - tol, maxX = Math.max(e.x1, e.x2) + tol;
        const minY = Math.min(e.y1, e.y2) - tol, maxY = Math.max(e.y1, e.y2) + tol;
        if (pt.x >= minX && pt.x <= maxX && pt.y >= minY && pt.y <= maxY) return e;
      } else if (distancePointToPolyline(pt, entityPolyline(e)) <= tol) return e;
    }
    return null;
  }
  function entityBounds(e) {
    if (e.type === 'line' || e.type === 'rect') return { minX: Math.min(e.x1, e.x2), maxX: Math.max(e.x1, e.x2), minY: Math.min(e.y1, e.y2), maxY: Math.max(e.y1, e.y2) };
    if (e.type === 'circle') return { minX: e.cx - e.r, maxX: e.cx + e.r, minY: e.cy - e.r, maxY: e.cy + e.r };
    const pts = arcSamplePoints(e.cx, e.cy, e.r, e.a1, e.a2, 48);
    return { minX: Math.min(...pts.map(p => p.x)), maxX: Math.max(...pts.map(p => p.x)), minY: Math.min(...pts.map(p => p.y)), maxY: Math.max(...pts.map(p => p.y)) };
  }
  function overallBounds() {
    if (state.entities.length === 0) return { minX: 0, minY: 0, maxX: 0, maxY: 0 };
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    state.entities.forEach(e => { const b = entityBounds(e); minX = Math.min(minX, b.minX); minY = Math.min(minY, b.minY); maxX = Math.max(maxX, b.maxX); maxY = Math.max(maxY, b.maxY); });
    return { minX, minY, maxX, maxY };
  }
  function applyTranslatedFields(entity, orig, dx, dy) {
    if (entity.type === 'line' || entity.type === 'rect') { entity.x1 = orig.x1 + dx; entity.y1 = orig.y1 + dy; entity.x2 = orig.x2 + dx; entity.y2 = orig.y2 + dy; }
    else { entity.cx = orig.cx + dx; entity.cy = orig.cy + dy; }
  }

  // ---------- snapping ----------
  function snapPoint(pt, excludeId) {
    const tolWorld = 10 / state.view.scale;
    if (ui.snapPoints.checked) {
      let best = null, bestD = tolWorld;
      for (const e of state.entities) {
        if (e.id === excludeId) continue;
        for (const c of entityCandidatePoints(e)) { const d = dist(pt, c); if (d < bestD) { bestD = d; best = c; } }
      }
      if (best) return { x: best.x, y: best.y };
    }
    if (ui.snapGrid.checked) {
      const g = parseFloat(ui.gridSpacing.value) || 1;
      return { x: Math.round(pt.x / g) * g, y: Math.round(pt.y / g) * g };
    }
    return { x: pt.x, y: pt.y };
  }

  // ---------- history ----------
  function cloneState() { return JSON.parse(JSON.stringify({ entities: state.entities, welds: state.welds })); }
  function autosave() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ entities: state.entities, welds: state.welds, nextId: state.nextId })); } catch (_) {} }
  function pushHistory() {
    state.history = state.history.slice(0, state.historyIndex + 1);
    state.history.push(cloneState());
    if (state.history.length > 120) state.history.shift();
    state.historyIndex = state.history.length - 1;
    autosave();
    updateHistoryButtons();
  }
  function resetHistory() { state.history = [cloneState()]; state.historyIndex = 0; updateHistoryButtons(); }
  function undo() {
    if (state.historyIndex <= 0) return;
    state.historyIndex--; const snap = JSON.parse(JSON.stringify(state.history[state.historyIndex]));
    state.entities = snap.entities; state.welds = snap.welds || [];
    if (!state.entities.some(e => e.id === state.selectedId)) state.selectedId = null;
    autosave(); refreshUI();
  }
  function redo() {
    if (state.historyIndex >= state.history.length - 1) return;
    state.historyIndex++; const snap = JSON.parse(JSON.stringify(state.history[state.historyIndex]));
    state.entities = snap.entities; state.welds = snap.welds || [];
    if (!state.entities.some(e => e.id === state.selectedId)) state.selectedId = null;
    autosave(); refreshUI();
  }
  function updateHistoryButtons() {
    ui.undoButton.disabled = state.historyIndex <= 0;
    ui.redoButton.disabled = state.historyIndex >= state.history.length - 1;
    ui.clearButton.disabled = state.entities.length === 0;
  }

  // ---------- entities CRUD ----------
  function addEntity(fields) {
    const entity = Object.assign({ id: state.nextId++ }, fields);
    const wasEmpty = state.entities.length === 0;
    state.entities.push(entity);
    autoWeldEntity(entity.id);
    pushHistory();
    state.selectedId = entity.id;
    refreshUI();
    if (wasEmpty) fitView();
  }
  function deleteEntitySelected() {
    if (state.selectedId == null) return;
    removeFromWelds(state.selectedId);
    state.entities = state.entities.filter(e => e.id !== state.selectedId);
    state.selectedId = null;
    pushHistory();
    refreshUI();
  }
  function selectEntity(id) { state.selectedId = id; renderProperties(); draw(); }

  function updateMetrics() {
    const counts = { line: 0, rect: 0, circle: 0, arc: 0 };
    state.entities.forEach(e => { counts[e.type]++; });
    ui.metricLines.textContent = counts.line; ui.metricRects.textContent = counts.rect;
    ui.metricCircles.textContent = counts.circle; ui.metricArcs.textContent = counts.arc;
  }
  function updateEntitiesSubtitle() { ui.entitiesSubtitle.textContent = state.entities.length === 0 ? t('addToStart') : t('entitiesCount', { count: state.entities.length }); }
  function updateEmptyState() { ui.emptyState.classList.toggle('hidden', state.entities.length > 0); }
  function updateToolHint() { ui.toolHint.textContent = t({ select:'hintSelect', line:'hintLine', rect:'hintRect', circle:'hintCircle', arc:'hintArc' }[state.tool]); }

  function refreshUI() {
    updateMetrics(); updateEmptyState(); updateEntitiesSubtitle(); updateHistoryButtons();
    ui.exportButton.disabled = state.entities.length === 0;
    ui.fitButton.disabled = state.entities.length === 0;
    renderProperties();
    draw();
  }

  // ---------- properties panel ----------
  function computeSubtitle(e) {
    if (e.type === 'line') return `${t('entityLine')} · ${fmt(dist({ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }))} mm · ${fmt(angleOfPoint({ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y2 }))}°`;
    if (e.type === 'rect') return `${t('entityRect')} · ${fmt(Math.abs(e.x2 - e.x1))} × ${fmt(Math.abs(e.y2 - e.y1))} mm`;
    if (e.type === 'circle') return `${t('entityCircle')} · Ø ${fmt(e.r * 2)} mm`;
    return `${t('entityArc')} · R ${fmt(e.r)} mm`;
  }
  function renderProperties() {
    const entity = state.entities.find(e => e.id === state.selectedId);
    if (!entity) { ui.propertiesCard.hidden = true; ui.propertiesFields.innerHTML = ''; return; }
    ui.propertiesCard.hidden = false;
    ui.propertiesFields.innerHTML = '';
    const makeField = (labelKey, get, set, step) => {
      const label = document.createElement('label');
      const span = document.createElement('span'); span.textContent = t(labelKey);
      const input = document.createElement('input');
      input.type = 'number'; input.step = String(step || 0.1); input.value = round2(get());
      input.addEventListener('input', () => {
        const v = parseFloat(input.value);
        if (Number.isFinite(v)) { set(v); propagateAllPoints(entity); ui.propertiesSubtitle.textContent = computeSubtitle(entity); draw(); }
      });
      input.addEventListener('change', () => pushHistory());
      label.appendChild(span); label.appendChild(input);
      ui.propertiesFields.appendChild(label);
    };
    if (entity.type === 'line' || entity.type === 'rect') {
      makeField('fieldX1', () => entity.x1, v => entity.x1 = v);
      makeField('fieldY1', () => entity.y1, v => entity.y1 = v);
      makeField('fieldX2', () => entity.x2, v => entity.x2 = v);
      makeField('fieldY2', () => entity.y2, v => entity.y2 = v);
    } else if (entity.type === 'circle') {
      makeField('fieldCenterX', () => entity.cx, v => entity.cx = v);
      makeField('fieldCenterY', () => entity.cy, v => entity.cy = v);
      makeField('fieldRadius', () => entity.r, v => { if (v > 0) entity.r = v; });
    } else {
      makeField('fieldCenterX', () => entity.cx, v => entity.cx = v);
      makeField('fieldCenterY', () => entity.cy, v => entity.cy = v);
      makeField('fieldRadius', () => entity.r, v => { if (v > 0) entity.r = v; });
      makeField('fieldStartAngle', () => entity.a1, v => entity.a1 = normalizeAngle(v), 1);
      makeField('fieldEndAngle', () => entity.a2, v => entity.a2 = normalizeAngle(v), 1);
    }
    ui.propertiesSubtitle.textContent = computeSubtitle(entity);
  }

  // ---------- view / rendering ----------
  function worldToScreen(x, y) { return { x: state.view.offsetX + x * state.view.scale, y: state.view.offsetY - y * state.view.scale }; }
  function screenToWorld(sx, sy) { return { x: (sx - state.view.offsetX) / state.view.scale, y: (state.view.offsetY - sy) / state.view.scale }; }
  function resizeCanvas() {
    const rect = ui.canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    const w = Math.max(1, Math.round(rect.width * dpr)), h = Math.max(1, Math.round(rect.height * dpr));
    if (ui.canvas.width !== w || ui.canvas.height !== h) { ui.canvas.width = w; ui.canvas.height = h; }
    if (!viewInitialized) { state.view.offsetX = rect.width / 2; state.view.offsetY = rect.height / 2; viewInitialized = true; }
    draw();
  }
  function fitView() {
    if (state.entities.length === 0) return;
    const b = overallBounds(), rect = ui.canvas.getBoundingClientRect(), pad = 44;
    const width = Math.max(b.maxX - b.minX, 1), height = Math.max(b.maxY - b.minY, 1);
    const scale = Math.max(0.02, Math.min(200, Math.min((rect.width - pad * 2) / width, (rect.height - pad * 2) / height)));
    state.view.scale = scale;
    state.view.offsetX = rect.width / 2 - (b.minX + width / 2) * scale;
    state.view.offsetY = rect.height / 2 + (b.minY + height / 2) * scale;
    draw();
  }
  function drawAxes(ctx, rect) {
    const origin = worldToScreen(0, 0);
    ctx.strokeStyle = '#c7d2d6'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, origin.y); ctx.lineTo(rect.width, origin.y); ctx.moveTo(origin.x, 0); ctx.lineTo(origin.x, rect.height); ctx.stroke();
  }
  function drawHandles(ctx, e) {
    const weldable = WELDABLE_KEYS[e.type] || [];
    pointKeysOf(e).forEach(key => {
      const p = getPoint(e, key), s = worldToScreen(p.x, p.y);
      ctx.lineWidth = 1.5; ctx.strokeStyle = '#f36b2b';
      if (key === 'radius') {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.arc(s.x, s.y, 4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      } else {
        ctx.fillStyle = weldable.includes(key) && isWelded(e.id, key) ? '#f36b2b' : '#ffffff';
        ctx.beginPath(); ctx.rect(s.x - 4, s.y - 4, 8, 8); ctx.fill(); ctx.stroke();
      }
    });
  }
  function drawEntity(ctx, e, selected, hovered) {
    ctx.lineWidth = selected ? 2.4 : hovered ? 1.8 : 1.3;
    ctx.strokeStyle = selected ? '#f36b2b' : typeColor[e.type];
    if (e.type === 'line') {
      const p1 = worldToScreen(e.x1, e.y1), p2 = worldToScreen(e.x2, e.y2);
      ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
    } else if (e.type === 'rect') {
      const pts = [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y1 }, { x: e.x2, y: e.y2 }, { x: e.x1, y: e.y2 }].map(p => worldToScreen(p.x, p.y));
      ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y); pts.slice(1).forEach(p => ctx.lineTo(p.x, p.y)); ctx.closePath();
      ctx.fillStyle = typeFill.rect; ctx.fill(); ctx.stroke();
    } else if (e.type === 'circle') {
      const c = worldToScreen(e.cx, e.cy);
      ctx.beginPath(); ctx.arc(c.x, c.y, e.r * state.view.scale, 0, Math.PI * 2);
      ctx.fillStyle = typeFill.circle; ctx.fill(); ctx.stroke();
    } else {
      const pts = arcSamplePoints(e.cx, e.cy, e.r, e.a1, e.a2, 64).map(p => worldToScreen(p.x, p.y));
      ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y); pts.slice(1).forEach(p => ctx.lineTo(p.x, p.y)); ctx.stroke();
    }
    if (selected) drawHandles(ctx, e);
  }
  function drawDraft(ctx) {
    const d = state.draft, p0 = d.points[0], preview = d.preview;
    ctx.save(); ctx.setLineDash([5, 4]); ctx.strokeStyle = '#157f7b'; ctx.lineWidth = 1.4;
    if (d.type === 'line' && preview) {
      const a = worldToScreen(p0.x, p0.y), b = worldToScreen(preview.x, preview.y);
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    } else if (d.type === 'rect' && preview) {
      const pts = [{ x: p0.x, y: p0.y }, { x: preview.x, y: p0.y }, { x: preview.x, y: preview.y }, { x: p0.x, y: preview.y }].map(p => worldToScreen(p.x, p.y));
      ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y); pts.slice(1).forEach(p => ctx.lineTo(p.x, p.y)); ctx.closePath(); ctx.stroke();
    } else if (d.type === 'circle' && preview) {
      const c = worldToScreen(p0.x, p0.y);
      ctx.beginPath(); ctx.arc(c.x, c.y, dist(p0, preview) * state.view.scale, 0, Math.PI * 2); ctx.stroke();
    } else if (d.type === 'arc') {
      if (d.points.length === 1 && preview) {
        const a = worldToScreen(p0.x, p0.y), b = worldToScreen(preview.x, preview.y);
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      } else if (d.points.length === 2 && preview) {
        const arc = resolveArc(d.points[0], d.points[1], preview);
        if (arc) {
          const pts = arcSamplePoints(arc.cx, arc.cy, arc.r, arc.a1, arc.a2, 48).map(p => worldToScreen(p.x, p.y));
          ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y); pts.slice(1).forEach(p => ctx.lineTo(p.x, p.y)); ctx.stroke();
        } else {
          const a = worldToScreen(d.points[0].x, d.points[0].y), b = worldToScreen(d.points[1].x, d.points[1].y);
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    ctx.restore();
    ctx.fillStyle = '#f36b2b';
    d.points.forEach(p => { const s = worldToScreen(p.x, p.y); ctx.beginPath(); ctx.arc(s.x, s.y, 3, 0, Math.PI * 2); ctx.fill(); });
  }
  function draw() {
    const ctx = ui.canvas.getContext('2d'), dpr = window.devicePixelRatio || 1, rect = ui.canvas.getBoundingClientRect();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, rect.width, rect.height);
    drawAxes(ctx, rect);
    state.entities.forEach(e => drawEntity(ctx, e, e.id === state.selectedId, e.id === state.hoverId));
    if (state.draft) drawDraft(ctx);
  }

  function updateCoordReadout(pt) { ui.coordReadout.textContent = `X: ${fmt(pt.x)} mm · Y: ${fmt(pt.y)} mm`; }
  function updateDraftTooltip(sx, sy) {
    const d = state.draft; if (!d || !d.preview) { ui.drawTooltip.hidden = true; return; }
    const p0 = d.points[0]; let text = '';
    if (d.type === 'line') text = `${fmt(dist(p0, d.preview))} mm · ${fmt(angleOfPoint(p0, d.preview))}°`;
    else if (d.type === 'rect') text = `${fmt(Math.abs(d.preview.x - p0.x))} × ${fmt(Math.abs(d.preview.y - p0.y))} mm`;
    else if (d.type === 'circle') text = `R ${fmt(dist(p0, d.preview))} mm`;
    else if (d.type === 'arc' && d.points.length === 2) {
      const arc = resolveArc(d.points[0], d.points[1], d.preview);
      text = arc ? `R ${fmt(arc.r)} mm` : '';
    }
    if (!text) { ui.drawTooltip.hidden = true; return; }
    ui.drawTooltip.hidden = false; ui.drawTooltip.textContent = text;
    ui.drawTooltip.style.left = `${sx}px`; ui.drawTooltip.style.top = `${sy}px`;
  }

  function finalizeDraft() {
    const d = state.draft;
    if (d.type === 'line') {
      const [p1, p2] = d.points;
      if (dist(p1, p2) > 1e-6) addEntity({ type: 'line', x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
      else setMessage(t('degenerateShape'), 'error');
    } else if (d.type === 'rect') {
      const [p1, p2] = d.points;
      if (Math.abs(p2.x - p1.x) > 1e-6 && Math.abs(p2.y - p1.y) > 1e-6) addEntity({ type: 'rect', x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
      else setMessage(t('degenerateShape'), 'error');
    } else if (d.type === 'circle') {
      const [p1, p2] = d.points, r = dist(p1, p2);
      if (r > 1e-6) addEntity({ type: 'circle', cx: p1.x, cy: p1.y, r });
      else setMessage(t('degenerateShape'), 'error');
    } else if (d.type === 'arc') {
      const [p1, p2, p3] = d.points, arc = resolveArc(p1, p2, p3);
      if (arc) addEntity({ type: 'arc', cx: arc.cx, cy: arc.cy, r: arc.r, a1: arc.a1, a2: arc.a2 });
      else setMessage(t('arcCollinear'), 'error');
    }
    state.draft = null; ui.drawTooltip.hidden = true; draw();
  }

  // ---------- DXF export ----------
  function dxfNumber(value) { return Math.abs(value) < 1e-10 ? '0' : Number(value.toFixed(6)).toString(); }
  function buildDxf() {
    const out = []; const pair = (code, value) => { out.push(String(code), String(value)); };
    const b = overallBounds();
    pair(0, 'SECTION'); pair(2, 'HEADER');
    pair(9, '$ACADVER'); pair(1, 'AC1009');
    pair(9, '$MEASUREMENT'); pair(70, 1);
    pair(9, '$EXTMIN'); pair(10, dxfNumber(b.minX)); pair(20, dxfNumber(b.minY)); pair(30, 0);
    pair(9, '$EXTMAX'); pair(10, dxfNumber(b.maxX)); pair(20, dxfNumber(b.maxY)); pair(30, 0);
    pair(0, 'ENDSEC');
    pair(0, 'SECTION'); pair(2, 'TABLES');
    pair(0, 'TABLE'); pair(2, 'LTYPE'); pair(70, 1);
    pair(0, 'LTYPE'); pair(2, 'CONTINUOUS'); pair(70, 0); pair(3, 'Solid line'); pair(72, 65); pair(73, 0); pair(40, 0);
    pair(0, 'ENDTAB');
    pair(0, 'TABLE'); pair(2, 'LAYER'); pair(70, 1);
    pair(0, 'LAYER'); pair(2, '0'); pair(70, 0); pair(62, 7); pair(6, 'CONTINUOUS');
    pair(0, 'ENDTAB'); pair(0, 'ENDSEC');
    pair(0, 'SECTION'); pair(2, 'BLOCKS'); pair(0, 'ENDSEC');
    pair(0, 'SECTION'); pair(2, 'ENTITIES');
    state.entities.forEach(e => {
      if (e.type === 'line') {
        pair(0, 'LINE'); pair(8, '0'); pair(10, dxfNumber(e.x1)); pair(20, dxfNumber(e.y1)); pair(30, 0); pair(11, dxfNumber(e.x2)); pair(21, dxfNumber(e.y2)); pair(31, 0);
      } else if (e.type === 'rect') {
        const pts = [{ x: e.x1, y: e.y1 }, { x: e.x2, y: e.y1 }, { x: e.x2, y: e.y2 }, { x: e.x1, y: e.y2 }];
        pair(0, 'POLYLINE'); pair(8, '0'); pair(66, 1); pair(10, 0); pair(20, 0); pair(30, 0); pair(70, 1);
        pts.forEach(p => { pair(0, 'VERTEX'); pair(8, '0'); pair(10, dxfNumber(p.x)); pair(20, dxfNumber(p.y)); pair(30, 0); pair(70, 0); });
        pair(0, 'SEQEND'); pair(8, '0');
      } else if (e.type === 'circle') {
        pair(0, 'CIRCLE'); pair(8, '0'); pair(10, dxfNumber(e.cx)); pair(20, dxfNumber(e.cy)); pair(30, 0); pair(40, dxfNumber(e.r));
      } else {
        pair(0, 'ARC'); pair(8, '0'); pair(10, dxfNumber(e.cx)); pair(20, dxfNumber(e.cy)); pair(30, 0); pair(40, dxfNumber(e.r)); pair(50, dxfNumber(e.a1)); pair(51, dxfNumber(e.a2));
      }
    });
    pair(0, 'ENDSEC'); pair(0, 'EOF');
    return out.join('\r\n') + '\r\n';
  }
  function download(content, filename, type) {
    const blob = new Blob([content], { type }); const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = filename; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // ---------- events ----------
  function pointerInfo(e) {
    const rect = ui.canvas.getBoundingClientRect();
    const sx = e.clientX - rect.left, sy = e.clientY - rect.top;
    return { sx, sy, world: screenToWorld(sx, sy) };
  }
  function handleHitTest(entity, pt, tol) {
    for (const key of pointKeysOf(entity)) { if (dist(pt, getPoint(entity, key)) <= tol) return key; }
    return null;
  }
  ui.canvas.addEventListener('pointerdown', e => {
    const { sx, sy, world } = pointerInfo(e);
    if (state.tool === 'select') {
      const tolHandle = 9 / state.view.scale;
      const selectedEntity = state.entities.find(en => en.id === state.selectedId);
      const handleKey = selectedEntity ? handleHitTest(selectedEntity, world, tolHandle) : null;
      if (selectedEntity && handleKey) {
        state.pointDrag = { id: selectedEntity.id, key: handleKey };
        ui.canvas.setPointerCapture(e.pointerId);
        draw();
        return;
      }
      const tol = 8 / state.view.scale;
      const hit = hitTest(world, tol);
      if (hit) {
        const snappedStart = snapPoint(world, hit.id);
        state.dragging = { id: hit.id, start: snappedStart, orig: JSON.parse(JSON.stringify(hit)) };
        selectEntity(hit.id);
        ui.canvas.setPointerCapture(e.pointerId);
      } else {
        state.panning = true; state.panLast = { x: sx, y: sy };
        ui.canvasWrap.classList.add('panning');
        selectEntity(null);
        ui.canvas.setPointerCapture(e.pointerId);
      }
    } else {
      const snapped = snapPoint(world, null);
      if (!state.draft) state.draft = { type: state.tool, points: [snapped], preview: snapped };
      else {
        state.draft.points.push(snapped);
        const need = state.tool === 'arc' ? 3 : 2;
        if (state.draft.points.length >= need) finalizeDraft();
      }
    }
    draw();
  });
  ui.canvas.addEventListener('pointermove', e => {
    const { sx, sy, world } = pointerInfo(e);
    if (state.dragging) {
      const snappedNow = snapPoint(world, state.dragging.id);
      let dx = snappedNow.x - state.dragging.start.x, dy = snappedNow.y - state.dragging.start.y;
      const entity = state.entities.find(en => en.id === state.dragging.id);
      if (entity) {
        ({ dx, dy } = snapWholeEntityDelta(entity, state.dragging.orig, dx, dy));
        applyTranslatedFields(entity, state.dragging.orig, dx, dy); propagateAllPoints(entity); renderProperties();
      }
    } else if (state.pointDrag) {
      const snapped = snapPoint(world, state.pointDrag.id);
      const entity = state.entities.find(en => en.id === state.pointDrag.id);
      if (entity) { setPoint(entity, state.pointDrag.key, snapped.x, snapped.y); propagateWeld(entity.id, state.pointDrag.key, snapped.x, snapped.y); renderProperties(); }
    } else if (state.panning) {
      state.view.offsetX += sx - state.panLast.x; state.view.offsetY += sy - state.panLast.y;
      state.panLast = { x: sx, y: sy };
    } else if (state.draft) {
      state.draft.preview = snapPoint(world, null);
      updateDraftTooltip(sx, sy);
    }
    updateCoordReadout(world);
    draw();
  });
  ui.canvas.addEventListener('pointerup', e => {
    if (state.dragging) {
      autoWeldEntity(state.dragging.id);
      pushHistory(); state.dragging = null; renderProperties();
      ui.canvas.releasePointerCapture(e.pointerId);
    }
    if (state.pointDrag) {
      autoWeldEntity(state.pointDrag.id);
      pushHistory(); state.pointDrag = null; renderProperties();
      ui.canvas.releasePointerCapture(e.pointerId);
    }
    if (state.panning) { state.panning = false; ui.canvasWrap.classList.remove('panning'); ui.canvas.releasePointerCapture(e.pointerId); }
    draw();
  });
  ui.canvas.addEventListener('pointercancel', () => { state.dragging = null; state.pointDrag = null; state.panning = false; ui.canvasWrap.classList.remove('panning'); });
  ui.canvas.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = ui.canvas.getBoundingClientRect(), mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const factor = Math.exp(-e.deltaY * .001);
    const newScale = Math.max(.02, Math.min(200, state.view.scale * factor));
    state.view.offsetX = mx - (mx - state.view.offsetX) * newScale / state.view.scale;
    state.view.offsetY = my - (my - state.view.offsetY) * newScale / state.view.scale;
    state.view.scale = newScale;
    draw();
  }, { passive: false });

  document.querySelectorAll('.tool-button').forEach(btn => btn.addEventListener('click', () => {
    state.tool = btn.dataset.tool;
    document.querySelectorAll('.tool-button').forEach(b => b.classList.toggle('active', b === btn));
    state.draft = null; ui.drawTooltip.hidden = true;
    ui.canvasWrap.classList.toggle('select-mode', state.tool === 'select');
    if (state.tool !== 'select') selectEntity(null); else renderProperties();
    updateToolHint();
    draw();
  }));

  ui.deleteEntityButton.addEventListener('click', deleteEntitySelected);
  ui.undoButton.addEventListener('click', undo);
  ui.redoButton.addEventListener('click', redo);
  ui.clearButton.addEventListener('click', () => {
    if (state.entities.length === 0) return;
    if (!confirm(t('confirmClear'))) return;
    state.entities = []; state.welds = []; state.selectedId = null; pushHistory(); refreshUI();
  });
  ui.fitButton.addEventListener('click', fitView);
  ui.exportButton.addEventListener('click', () => {
    if (state.entities.length === 0) { setMessage(t('nothingToExport'), 'error'); return; }
    download(buildDxf(), `laymancad-desenho_${new Date().toISOString().slice(0, 10)}.dxf`, 'application/dxf');
    setMessage(t('exported'), 'success');
  });
  ui.saveProjectButton.addEventListener('click', () => {
    download(JSON.stringify({ entities: state.entities, welds: state.welds, nextId: state.nextId }), `laymancad-projeto_${new Date().toISOString().slice(0, 10)}.json`, 'application/json');
    setMessage(t('projectSaved'), 'success');
  });
  ui.openProjectButton.addEventListener('click', () => ui.openProjectInput.click());
  ui.openProjectInput.addEventListener('change', () => {
    const file = ui.openProjectInput.files[0]; if (!file) return;
    file.text().then(text => {
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed.entities)) throw new Error('invalid');
      state.entities = parsed.entities; state.welds = Array.isArray(parsed.welds) ? parsed.welds : [];
      state.nextId = parsed.nextId || (Math.max(0, ...parsed.entities.map(e => e.id || 0)) + 1);
      state.selectedId = null; resetHistory(); refreshUI(); fitView();
      setMessage(t('projectLoaded'), 'success');
    }).catch(() => setMessage(t('invalidProjectFile'), 'error'))
      .finally(() => { ui.openProjectInput.value = ''; });
  });

  window.addEventListener('keydown', e => {
    const tag = document.activeElement?.tagName;
    if (e.key === 'Escape') { if (state.draft) { state.draft = null; ui.drawTooltip.hidden = true; draw(); } return; }
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
    if ((e.key === 'Delete' || e.key === 'Backspace') && state.selectedId != null) { e.preventDefault(); deleteEntitySelected(); }
    else if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === 'z') { e.preventDefault(); undo(); }
    else if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'y' || (e.shiftKey && e.key.toLowerCase() === 'z'))) { e.preventDefault(); redo(); }
  });

  ui.languageSelect.addEventListener('change', e => applyLanguage(e.target.value));
  ui.languageButton.addEventListener('click', () => setLanguageMenu(ui.languageMenu.hidden));
  ui.languageMenu.addEventListener('click', e => {
    const option = e.target.closest('[data-language]');
    if (!option) return;
    applyLanguage(option.dataset.language); setLanguageMenu(false); ui.languageButton.focus();
  });
  ui.languagePicker.addEventListener('keydown', e => {
    if (e.key === 'Escape') { setLanguageMenu(false); ui.languageButton.focus(); return; }
    if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return;
    e.preventDefault(); setLanguageMenu(true);
    const options = [...ui.languageMenu.querySelectorAll('[data-language]')];
    const current = Math.max(0, options.indexOf(document.activeElement));
    options[(current + (e.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length].focus();
  });
  document.addEventListener('click', e => { if (!ui.languagePicker.contains(e.target)) setLanguageMenu(false); });

  new ResizeObserver(resizeCanvas).observe(ui.canvasWrap);
  window.LaymanCadCore = Object.freeze({ buildDxf, circumcenter, resolveArc, arcSamplePoints });

  // ---------- init ----------
  function loadAutosave() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.entities)) { state.entities = parsed.entities; state.welds = Array.isArray(parsed.welds) ? parsed.welds : []; state.nextId = parsed.nextId || 1; }
    } catch (_) {}
  }
  loadAutosave();
  resetHistory();
  applyLanguage(state.language, false);
  resizeCanvas();
  if (state.entities.length > 0) fitView();
  refreshUI();
})();

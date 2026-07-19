'use strict';

/* ================================================================
   DataLens · script.js
   ================================================================ */

// ── TRANSLATIONS ─────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    'nav.import': 'Import', 'nav.explore': 'Explore', 'nav.analyze': 'Analyze',
    'nav.visualize': 'Visualize', 'nav.process': 'Process',
    'import.title': 'Import Data',
    'import.subtitle': 'Upload a CSV file or choose a sample dataset',
    'import.dropText': 'Drag and drop your CSV file here',
    'import.or': 'or', 'import.browse': 'Browse Files',
    'import.samples': 'Sample Datasets',
    'import.sample.sales': 'Sales Data', 'import.sample.salesDesc': 'Monthly sales by region and product',
    'import.sample.iris': 'Iris Dataset', 'import.sample.irisDesc': 'Classic flower measurements',
    'import.sample.weather': 'Weather Data', 'import.sample.weatherDesc': 'Temperature and precipitation records',
    'import.exploreBtn': 'Explore Data →',
    'import.loadedRows': 'rows', 'import.loadedCols': 'columns',
    'explore.title': 'Explore Data', 'explore.search': 'Search…',
    'explore.rowsPerPage': 'rows per page', 'explore.columnInfo': 'Column Information',
    'explore.showing': 'Showing {s}–{e} of {t} rows',
    'analyze.title': 'Statistical Analysis', 'analyze.columnStats': 'Column Statistics',
    'analyze.correlation': 'Correlation Matrix',
    'analyze.rows': 'Rows', 'analyze.cols': 'Columns',
    'analyze.missing': 'Missing Values', 'analyze.duplicates': 'Duplicates',
    'analyze.mean': 'Mean', 'analyze.median': 'Median', 'analyze.mode': 'Mode',
    'analyze.std': 'Std Dev', 'analyze.min': 'Min', 'analyze.max': 'Max',
    'analyze.q1': 'Q1 (25%)', 'analyze.q3': 'Q3 (75%)',
    'analyze.unique': 'Unique', 'analyze.type': 'Type', 'analyze.missing2': 'Missing',
    'visualize.title': 'Visualizations',
    'viz.bar': 'Bar', 'viz.line': 'Line', 'viz.scatter': 'Scatter',
    'viz.histogram': 'Histogram', 'viz.pie': 'Pie', 'viz.box': 'Box',
    'viz.xAxis': 'X Axis', 'viz.yAxis': 'Y Axis', 'viz.colorBy': 'Color By', 'viz.none': 'None',
    'viz.generate': 'Generate', 'viz.download': 'Download PNG',
    'viz.autoCharts': 'Auto-Generated Charts',
    'process.title': 'Data Processing', 'process.operations': 'Operations',
    'process.history': 'Operation History',
    'process.removeDuplicates': 'Remove Duplicates',
    'process.removeDuplicatesDesc': 'Remove duplicate rows from the dataset',
    'process.missingValues': 'Handle Missing Values', 'process.renameColumn': 'Rename Column',
    'process.filterRows': 'Filter Rows', 'process.calcColumn': 'Add Calculated Column',
    'process.apply': 'Apply', 'process.allColumns': 'All Columns',
    'process.removeRows': 'Remove rows', 'process.fillMean': 'Fill with mean',
    'process.fillMedian': 'Fill with median', 'process.fillMode': 'Fill with mode',
    'process.fillValue': 'Fill with value', 'process.enterValue': 'Enter value…',
    'process.filterEq': 'equals', 'process.filterNeq': 'not equals',
    'process.filterGt': 'greater than', 'process.filterLt': 'less than',
    'process.filterContains': 'contains',
    'process.newName': 'New name…', 'process.calcColName': 'Column name…',
    'process.calcExpression': 'e.g. revenue - cost',
    'process.calcHint': 'Use column names as variables',
    'process.exportCSV': 'Export as CSV', 'process.undo': 'Undo',
    'process.filterValue': 'Value…',
    'process.currentDataset': 'Dataset: {r} rows × {c} columns',
    'common.noData': 'No data loaded. Please import a file first.',
    'common.loading': 'Processing…', 'common.numeric': 'Numeric',
    'common.text': 'Text', 'common.date': 'Date',
    'common.noResults': 'No results found',
    'kbd.title': 'Keyboard Shortcuts', 'kbd.navigate': 'Navigate sections',
    'kbd.theme': 'Toggle theme', 'kbd.help': 'Show this help',
    'kbd.close': 'Close / dismiss', 'kbd.closeBtn': 'Close',
    'toast.loaded': 'Dataset loaded: {r} rows × {c} columns',
    'toast.dupes': 'Removed {n} duplicate row(s)',
    'toast.noDupes': 'No duplicate rows found',
    'toast.missingDone': 'Missing values handled',
    'toast.renamed': 'Column renamed to "{n}"',
    'toast.filtered': 'Filtered to {n} row(s)',
    'toast.calcAdded': 'Column "{n}" added',
    'toast.noHistory': 'Nothing to undo',
    'toast.undone': 'Last operation undone',
    'toast.exported': 'CSV file downloaded',
    'toast.error': 'An error occurred',
  },
  pt: {
    'nav.import': 'Importar', 'nav.explore': 'Explorar', 'nav.analyze': 'Analisar',
    'nav.visualize': 'Visualizar', 'nav.process': 'Processar',
    'import.title': 'Importar Dados',
    'import.subtitle': 'Carregue um arquivo CSV ou escolha um conjunto de dados de exemplo',
    'import.dropText': 'Arraste e solte seu arquivo CSV aqui',
    'import.or': 'ou', 'import.browse': 'Procurar Arquivos',
    'import.samples': 'Conjuntos de Dados de Exemplo',
    'import.sample.sales': 'Dados de Vendas', 'import.sample.salesDesc': 'Vendas mensais por região e produto',
    'import.sample.iris': 'Dataset Iris', 'import.sample.irisDesc': 'Medidas clássicas de flores',
    'import.sample.weather': 'Dados Climáticos', 'import.sample.weatherDesc': 'Registros de temperatura e precipitação',
    'import.exploreBtn': 'Explorar Dados →',
    'import.loadedRows': 'linhas', 'import.loadedCols': 'colunas',
    'explore.title': 'Explorar Dados', 'explore.search': 'Pesquisar…',
    'explore.rowsPerPage': 'linhas por página', 'explore.columnInfo': 'Informações das Colunas',
    'explore.showing': 'Exibindo {s}–{e} de {t} linhas',
    'analyze.title': 'Análise Estatística', 'analyze.columnStats': 'Estatísticas por Coluna',
    'analyze.correlation': 'Matriz de Correlação',
    'analyze.rows': 'Linhas', 'analyze.cols': 'Colunas',
    'analyze.missing': 'Valores Ausentes', 'analyze.duplicates': 'Duplicatas',
    'analyze.mean': 'Média', 'analyze.median': 'Mediana', 'analyze.mode': 'Moda',
    'analyze.std': 'Desvio Padrão', 'analyze.min': 'Mínimo', 'analyze.max': 'Máximo',
    'analyze.q1': 'Q1 (25%)', 'analyze.q3': 'Q3 (75%)',
    'analyze.unique': 'Únicos', 'analyze.type': 'Tipo', 'analyze.missing2': 'Ausentes',
    'visualize.title': 'Visualizações',
    'viz.bar': 'Barras', 'viz.line': 'Linha', 'viz.scatter': 'Dispersão',
    'viz.histogram': 'Histograma', 'viz.pie': 'Pizza', 'viz.box': 'Caixa',
    'viz.xAxis': 'Eixo X', 'viz.yAxis': 'Eixo Y', 'viz.colorBy': 'Colorir Por', 'viz.none': 'Nenhum',
    'viz.generate': 'Gerar', 'viz.download': 'Baixar PNG',
    'viz.autoCharts': 'Gráficos Auto-Gerados',
    'process.title': 'Processamento de Dados', 'process.operations': 'Operações',
    'process.history': 'Histórico de Operações',
    'process.removeDuplicates': 'Remover Duplicatas',
    'process.removeDuplicatesDesc': 'Remover linhas duplicadas do conjunto de dados',
    'process.missingValues': 'Tratar Valores Ausentes', 'process.renameColumn': 'Renomear Coluna',
    'process.filterRows': 'Filtrar Linhas', 'process.calcColumn': 'Adicionar Coluna Calculada',
    'process.apply': 'Aplicar', 'process.allColumns': 'Todas as Colunas',
    'process.removeRows': 'Remover linhas', 'process.fillMean': 'Preencher com média',
    'process.fillMedian': 'Preencher com mediana', 'process.fillMode': 'Preencher com moda',
    'process.fillValue': 'Preencher com valor', 'process.enterValue': 'Digite o valor…',
    'process.filterEq': 'igual a', 'process.filterNeq': 'diferente de',
    'process.filterGt': 'maior que', 'process.filterLt': 'menor que',
    'process.filterContains': 'contém',
    'process.newName': 'Novo nome…', 'process.calcColName': 'Nome da coluna…',
    'process.calcExpression': 'ex: receita - custo',
    'process.calcHint': 'Use nomes de colunas como variáveis',
    'process.exportCSV': 'Exportar como CSV', 'process.undo': 'Desfazer',
    'process.filterValue': 'Valor…',
    'process.currentDataset': 'Dataset: {r} linhas × {c} colunas',
    'common.noData': 'Nenhum dado carregado. Por favor, importe um arquivo primeiro.',
    'common.loading': 'Processando…', 'common.numeric': 'Numérico',
    'common.text': 'Texto', 'common.date': 'Data',
    'common.noResults': 'Nenhum resultado encontrado',
    'kbd.title': 'Atalhos do Teclado', 'kbd.navigate': 'Navegar entre seções',
    'kbd.theme': 'Alternar tema', 'kbd.help': 'Mostrar esta ajuda',
    'kbd.close': 'Fechar / dispensar', 'kbd.closeBtn': 'Fechar',
    'toast.loaded': 'Dataset carregado: {r} linhas × {c} colunas',
    'toast.dupes': '{n} linha(s) duplicada(s) removida(s)',
    'toast.noDupes': 'Nenhuma linha duplicada encontrada',
    'toast.missingDone': 'Valores ausentes tratados',
    'toast.renamed': 'Coluna renomeada para "{n}"',
    'toast.filtered': 'Filtrado para {n} linha(s)',
    'toast.calcAdded': 'Coluna "{n}" adicionada',
    'toast.noHistory': 'Nada para desfazer',
    'toast.undone': 'Última operação desfeita',
    'toast.exported': 'Arquivo CSV baixado',
    'toast.error': 'Ocorreu um erro',
  },
  es: {
    'nav.import': 'Importar', 'nav.explore': 'Explorar', 'nav.analyze': 'Analizar',
    'nav.visualize': 'Visualizar', 'nav.process': 'Procesar',
    'import.title': 'Importar Datos',
    'import.subtitle': 'Sube un archivo CSV o elige un conjunto de datos de muestra',
    'import.dropText': 'Arrastra y suelta tu archivo CSV aquí',
    'import.or': 'o', 'import.browse': 'Examinar Archivos',
    'import.samples': 'Conjuntos de Datos de Muestra',
    'import.sample.sales': 'Datos de Ventas', 'import.sample.salesDesc': 'Ventas mensuales por región y producto',
    'import.sample.iris': 'Dataset Iris', 'import.sample.irisDesc': 'Medidas clásicas de flores',
    'import.sample.weather': 'Datos Climáticos', 'import.sample.weatherDesc': 'Registros de temperatura y precipitación',
    'import.exploreBtn': 'Explorar Datos →',
    'import.loadedRows': 'filas', 'import.loadedCols': 'columnas',
    'explore.title': 'Explorar Datos', 'explore.search': 'Buscar…',
    'explore.rowsPerPage': 'filas por página', 'explore.columnInfo': 'Información de Columnas',
    'explore.showing': 'Mostrando {s}–{e} de {t} filas',
    'analyze.title': 'Análisis Estadístico', 'analyze.columnStats': 'Estadísticas por Columna',
    'analyze.correlation': 'Matriz de Correlación',
    'analyze.rows': 'Filas', 'analyze.cols': 'Columnas',
    'analyze.missing': 'Valores Faltantes', 'analyze.duplicates': 'Duplicados',
    'analyze.mean': 'Media', 'analyze.median': 'Mediana', 'analyze.mode': 'Moda',
    'analyze.std': 'Desv. Est.', 'analyze.min': 'Mínimo', 'analyze.max': 'Máximo',
    'analyze.q1': 'Q1 (25%)', 'analyze.q3': 'Q3 (75%)',
    'analyze.unique': 'Únicos', 'analyze.type': 'Tipo', 'analyze.missing2': 'Faltantes',
    'visualize.title': 'Visualizaciones',
    'viz.bar': 'Barras', 'viz.line': 'Línea', 'viz.scatter': 'Dispersión',
    'viz.histogram': 'Histograma', 'viz.pie': 'Pastel', 'viz.box': 'Caja',
    'viz.xAxis': 'Eje X', 'viz.yAxis': 'Eje Y', 'viz.colorBy': 'Colorear Por', 'viz.none': 'Ninguno',
    'viz.generate': 'Generar', 'viz.download': 'Descargar PNG',
    'viz.autoCharts': 'Gráficos Auto-Generados',
    'process.title': 'Procesamiento de Datos', 'process.operations': 'Operaciones',
    'process.history': 'Historial de Operaciones',
    'process.removeDuplicates': 'Eliminar Duplicados',
    'process.removeDuplicatesDesc': 'Eliminar filas duplicadas del conjunto de datos',
    'process.missingValues': 'Manejar Valores Faltantes', 'process.renameColumn': 'Renombrar Columna',
    'process.filterRows': 'Filtrar Filas', 'process.calcColumn': 'Agregar Columna Calculada',
    'process.apply': 'Aplicar', 'process.allColumns': 'Todas las Columnas',
    'process.removeRows': 'Eliminar filas', 'process.fillMean': 'Rellenar con media',
    'process.fillMedian': 'Rellenar con mediana', 'process.fillMode': 'Rellenar con moda',
    'process.fillValue': 'Rellenar con valor', 'process.enterValue': 'Ingresa un valor…',
    'process.filterEq': 'igual a', 'process.filterNeq': 'distinto de',
    'process.filterGt': 'mayor que', 'process.filterLt': 'menor que',
    'process.filterContains': 'contiene',
    'process.newName': 'Nuevo nombre…', 'process.calcColName': 'Nombre de columna…',
    'process.calcExpression': 'ej: revenue - cost',
    'process.calcHint': 'Usa nombres de columnas como variables',
    'process.exportCSV': 'Exportar como CSV', 'process.undo': 'Deshacer',
    'process.filterValue': 'Valor…',
    'process.currentDataset': 'Dataset: {r} filas × {c} columnas',
    'common.noData': 'No hay datos cargados. Por favor, importa un archivo primero.',
    'common.loading': 'Procesando…', 'common.numeric': 'Numérico',
    'common.text': 'Texto', 'common.date': 'Fecha',
    'common.noResults': 'No se encontraron resultados',
    'kbd.title': 'Atajos de Teclado', 'kbd.navigate': 'Navegar secciones',
    'kbd.theme': 'Cambiar tema', 'kbd.help': 'Mostrar esta ayuda',
    'kbd.close': 'Cerrar / descartar', 'kbd.closeBtn': 'Cerrar',
    'toast.loaded': 'Dataset cargado: {r} filas × {c} columnas',
    'toast.dupes': '{n} fila(s) duplicada(s) eliminada(s)',
    'toast.noDupes': 'No se encontraron filas duplicadas',
    'toast.missingDone': 'Valores faltantes manejados',
    'toast.renamed': 'Columna renombrada a "{n}"',
    'toast.filtered': 'Filtrado a {n} fila(s)',
    'toast.calcAdded': 'Columna "{n}" agregada',
    'toast.noHistory': 'Nada que deshacer',
    'toast.undone': 'Última operación deshecha',
    'toast.exported': 'Archivo CSV descargado',
    'toast.error': 'Ocurrió un error',
  },
};

// ── SAMPLE DATA ───────────────────────────────────────────────────
const SAMPLES = {
  sales: `month,region,product,category,units,revenue,cost
Jan,North,Widget A,Electronics,120,3600,2100
Jan,South,Widget B,Electronics,85,4250,2125
Jan,East,Gadget C,Accessories,200,2000,800
Jan,West,Device X,Electronics,45,5400,2700
Jan,North,Gadget D,Accessories,310,1550,620
Feb,South,Widget A,Electronics,140,4200,2450
Feb,East,Widget B,Electronics,92,4600,2300
Feb,West,Gadget C,Accessories,175,1750,700
Feb,North,Device X,Electronics,58,6960,3480
Feb,South,Gadget D,Accessories,290,1450,580
Mar,East,Widget A,Electronics,165,4950,2887
Mar,West,Widget B,Electronics,110,5500,2750
Mar,North,Gadget C,Accessories,230,2300,920
Mar,South,Device X,Electronics,62,7440,3720
Mar,East,Gadget D,Accessories,320,1600,640
Apr,West,Widget A,Electronics,145,4350,2537
Apr,North,Widget B,Electronics,98,4900,2450
Apr,South,Gadget C,Accessories,210,2100,840
Apr,East,Device X,Electronics,55,6600,3300
Apr,West,Gadget D,Accessories,340,1700,680
May,North,Widget A,Electronics,180,5400,3150
May,South,Widget B,Electronics,125,6250,3125
May,East,Gadget C,Accessories,195,1950,780
May,West,Device X,Electronics,70,8400,4200
May,North,Gadget D,Accessories,365,1825,730
Jun,South,Widget A,Electronics,200,6000,3500
Jun,East,Widget B,Electronics,140,7000,3500
Jun,West,Gadget C,Accessories,225,2250,900
Jun,North,Device X,Electronics,80,9600,4800
Jun,South,Gadget D,Accessories,390,1950,780`,

  iris: `sepal_length,sepal_width,petal_length,petal_width,species
5.1,3.5,1.4,0.2,setosa
4.9,3.0,1.4,0.2,setosa
4.7,3.2,1.3,0.2,setosa
4.6,3.1,1.5,0.2,setosa
5.0,3.6,1.4,0.2,setosa
5.4,3.9,1.7,0.4,setosa
4.6,3.4,1.4,0.3,setosa
5.0,3.4,1.5,0.2,setosa
4.4,2.9,1.4,0.2,setosa
4.9,3.1,1.5,0.1,setosa
5.8,4.0,1.2,0.2,setosa
5.7,4.4,1.5,0.4,setosa
5.4,3.9,1.3,0.4,setosa
5.1,3.5,1.4,0.3,setosa
5.7,3.8,1.7,0.3,setosa
7.0,3.2,4.7,1.4,versicolor
6.4,3.2,4.5,1.5,versicolor
6.9,3.1,4.9,1.5,versicolor
5.5,2.3,4.0,1.3,versicolor
6.5,2.8,4.6,1.5,versicolor
5.7,2.8,4.5,1.3,versicolor
6.3,3.3,4.7,1.6,versicolor
4.9,2.4,3.3,1.0,versicolor
6.6,2.9,4.6,1.3,versicolor
5.2,2.7,3.9,1.4,versicolor
6.3,3.3,6.0,2.5,virginica
5.8,2.7,5.1,1.9,virginica
7.1,3.0,5.9,2.1,virginica
6.3,2.9,5.6,1.8,virginica
6.5,3.0,5.8,2.2,virginica
7.6,3.0,6.6,2.1,virginica
4.9,2.5,4.5,1.7,virginica
7.3,2.9,6.3,1.8,virginica
6.7,2.5,5.8,1.8,virginica
7.2,3.6,6.1,2.5,virginica`,

  weather: `date,city,temp_max,temp_min,precipitation,humidity,wind_speed
2024-01-01,New York,5.2,-1.3,12.5,72,18.4
2024-01-02,New York,3.8,-3.1,0.0,65,12.1
2024-01-03,Los Angeles,18.5,9.2,0.0,45,8.3
2024-01-04,Chicago,1.2,-5.8,5.2,78,22.1
2024-01-05,New York,-2.1,-8.3,18.7,82,25.6
2024-01-06,Los Angeles,20.1,11.3,0.0,42,6.7
2024-01-07,Chicago,-4.5,-10.2,8.3,85,30.2
2024-01-08,Miami,26.3,19.8,0.5,68,11.4
2024-01-09,Miami,27.1,20.2,2.3,71,9.8
2024-01-10,New York,4.5,-0.8,0.0,61,15.3
2024-01-11,Los Angeles,21.3,12.1,0.0,40,7.5
2024-01-12,Chicago,2.8,-4.2,3.1,74,19.8
2024-01-13,Miami,25.8,18.5,5.6,73,13.2
2024-01-14,New York,7.1,1.4,0.0,58,10.4
2024-01-15,Los Angeles,19.8,10.5,0.0,43,9.1
2024-01-16,Chicago,-1.3,-7.4,10.2,80,27.5
2024-01-17,Miami,28.2,21.3,0.0,66,8.9
2024-01-18,New York,2.3,-5.1,22.4,88,31.2
2024-01-19,Los Angeles,17.2,8.9,3.4,52,11.6
2024-01-20,Chicago,3.5,-2.8,0.0,70,16.3
2024-01-21,Miami,26.9,20.1,8.7,75,12.8
2024-01-22,New York,6.8,0.2,0.0,63,14.7
2024-01-23,Los Angeles,22.4,13.6,0.0,38,6.2
2024-01-24,Chicago,-3.2,-9.5,14.5,83,28.9
2024-01-25,Miami,27.5,20.8,1.2,69,10.3
2024-01-26,New York,1.5,-6.3,8.9,79,20.1
2024-01-27,Los Angeles,16.8,7.4,6.7,55,13.4
2024-01-28,Chicago,5.1,-1.6,0.0,68,17.2
2024-01-29,Miami,29.1,22.4,0.0,64,7.8
2024-01-30,New York,8.4,2.1,0.0,60,11.9`,
};

// ── STATE ─────────────────────────────────────────────────────────
const S = {
  data: null,
  columns: [],
  columnTypes: {},
  currentPage: 1,
  pageSize: 10,
  sortCol: null,
  sortDir: 'asc',
  searchText: '',
  section: 'import',
  lang: 'en',
  theme: 'light',
  chartType: 'bar',
  fileName: '',
  history: [],    // [{name, detail, before, after, data, columns, columnTypes}]
};

const COLORS = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#06b6d4','#84cc16','#f97316','#14b8a6'];

// ── I18N ──────────────────────────────────────────────────────────
function t(key, vars = {}) {
  let str = (TRANSLATIONS[S.lang] || TRANSLATIONS.en)[key] || key;
  Object.entries(vars).forEach(([k, v]) => { str = str.replace(`{${k}}`, v); });
  return str;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'OPTION') el.textContent = t(key);
    else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t(key);
    else el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.documentElement.lang = S.lang;
  document.title = 'DataLens';
}

function setLanguage(lang) {
  S.lang = lang;
  localStorage.setItem('dl-lang', lang);
  applyTranslations();
  // Re-render current section if data loaded
  if (S.data) renderSection(S.section);
}

// ── THEME ─────────────────────────────────────────────────────────
function setTheme(theme) {
  S.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('theme-toggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('dl-theme', theme);
  // Replot correlation / main chart if visible
  if (S.data) {
    if (S.section === 'analyze') renderCorrelation();
    if (S.section === 'visualize') { /* keep chart but re-generate auto charts */ renderAutoCharts(); }
  }
}

function toggleTheme() {
  setTheme(S.theme === 'dark' ? 'light' : 'dark');
}

// ── NAVIGATION ────────────────────────────────────────────────────
function navigateTo(section) {
  S.section = section;
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.section === section);
  });
  // Show section
  document.querySelectorAll('.section').forEach(s => {
    s.classList.toggle('active', s.id === `section-${section}`);
  });
  // Close mobile menu
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
  // Render
  renderSection(section);
}

function renderSection(section) {
  if (!S.data) return;
  if (section === 'explore') renderExplore();
  else if (section === 'analyze') renderAnalyze();
  else if (section === 'visualize') renderVisualize();
  else if (section === 'process') renderProcess();
}

// ── DATA UTILITIES ────────────────────────────────────────────────
function detectTypes(data, columns) {
  const types = {};
  columns.forEach(col => {
    const vals = data.map(r => r[col]).filter(v => v !== null && v !== undefined && String(v).trim() !== '');
    if (!vals.length) { types[col] = 'text'; return; }
    const numCount = vals.filter(v => !isNaN(Number(v)) && String(v).trim() !== '').length;
    const dateCount = vals.filter(v => {
      const n = Number(v);
      return isNaN(n) && !isNaN(Date.parse(v));
    }).length;
    if (numCount / vals.length >= 0.8) types[col] = 'numeric';
    else if (dateCount / vals.length >= 0.8) types[col] = 'date';
    else types[col] = 'text';
  });
  return types;
}

function getColValues(col) {
  return S.data.map(r => r[col]);
}

function getNumericValues(col) {
  return S.data.map(r => {
    const v = r[col];
    const n = Number(v);
    return (v === null || v === '' || v === undefined || isNaN(n)) ? null : n;
  });
}

function isMissing(v) {
  return v === null || v === undefined || String(v).trim() === '';
}

function getFilteredSorted() {
  let rows = S.data;
  if (S.searchText) {
    const q = S.searchText.toLowerCase();
    rows = rows.filter(row => S.columns.some(col => String(row[col] ?? '').toLowerCase().includes(q)));
  }
  if (S.sortCol) {
    const col = S.sortCol;
    const dir = S.sortDir === 'asc' ? 1 : -1;
    const isNum = S.columnTypes[col] === 'numeric';
    rows = [...rows].sort((a, b) => {
      const va = a[col] ?? '';
      const vb = b[col] ?? '';
      if (isNum) return (Number(va) - Number(vb)) * dir;
      return String(va).localeCompare(String(vb)) * dir;
    });
  }
  return rows;
}

function loadData(rows, columns, filename) {
  S.data = rows;
  S.columns = columns;
  S.columnTypes = detectTypes(rows, columns);
  S.fileName = filename;
  S.currentPage = 1;
  S.sortCol = null;
  S.searchText = '';
  S.history = [];

  // Show file info
  const fi = document.getElementById('file-info');
  fi.classList.remove('hidden');
  document.getElementById('file-info-name').textContent = filename;
  document.getElementById('file-info-meta').textContent =
    `${rows.length} ${t('import.loadedRows')} · ${columns.length} ${t('import.loadedCols')}`;

  // Show no-data to real content for sections
  ['explore','analyze','visualize','process'].forEach(s => {
    document.getElementById(`${s}-no-data`).classList.remove('hidden');
    document.getElementById(`${s}-content`).classList.add('hidden');
  });

  showToast(t('toast.loaded', {r: rows.length, c: columns.length}), 'success');
}

// ── IMPORT ────────────────────────────────────────────────────────
function handleFile(file) {
  if (!file) return;
  showLoading();
  const reader = new FileReader();
  reader.onload = e => {
    parseCSVContent(e.target.result, file.name);
    hideLoading();
  };
  reader.onerror = () => { hideLoading(); showToast(t('toast.error'), 'error'); };
  reader.readAsText(file);
}

function parseCSVContent(content, filename) {
  const result = Papa.parse(content, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: false,
    transformHeader: h => h.trim(),
  });
  if (result.errors.length && !result.data.length) {
    showToast(t('toast.error'), 'error');
    return;
  }
  const columns = result.meta.fields || [];
  const rows = result.data.map(row => {
    const clean = {};
    columns.forEach(c => { clean[c] = (row[c] === undefined || row[c] === null) ? '' : String(row[c]).trim(); });
    return clean;
  });
  loadData(rows, columns, filename);
}

function loadSample(name) {
  showLoading();
  setTimeout(() => {
    parseCSVContent(SAMPLES[name], `${name}.csv`);
    hideLoading();
  }, 50);
}

// ── EXPLORE ───────────────────────────────────────────────────────
function renderExplore() {
  if (!S.data) return;
  document.getElementById('explore-no-data').classList.add('hidden');
  document.getElementById('explore-content').classList.remove('hidden');
  renderTable();
  renderColumnInfo();
}

function renderTable() {
  const filtered = getFilteredSorted();
  const total = filtered.length;
  const pageSize = S.pageSize;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  if (S.currentPage > totalPages) S.currentPage = totalPages;
  const start = (S.currentPage - 1) * pageSize;
  const pageRows = filtered.slice(start, start + pageSize);

  // Row count
  const end = Math.min(start + pageSize, total);
  document.getElementById('row-count-display').textContent =
    total === 0 ? t('common.noResults') : t('explore.showing', {s: start + 1, e: end, t: total});

  // Head
  const thead = document.getElementById('table-head');
  thead.innerHTML = '';
  const tr = document.createElement('tr');
  S.columns.forEach(col => {
    const th = document.createElement('th');
    th.dataset.col = col;
    const isSorted = S.sortCol === col;
    if (isSorted) th.classList.add(S.sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
    th.innerHTML = `${escapeHtml(col)} <i class="sort-icon">${isSorted ? (S.sortDir === 'asc' ? '↑' : '↓') : '↕'}</i>`;
    th.addEventListener('click', () => {
      if (S.sortCol === col) S.sortDir = S.sortDir === 'asc' ? 'desc' : 'asc';
      else { S.sortCol = col; S.sortDir = 'asc'; }
      S.currentPage = 1;
      renderTable();
    });
    tr.appendChild(th);
  });
  thead.appendChild(tr);

  // Body
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  if (pageRows.length === 0) {
    const row = document.createElement('tr');
    const td = document.createElement('td');
    td.colSpan = S.columns.length;
    td.style.textAlign = 'center';
    td.style.padding = '2rem';
    td.style.color = 'var(--text-muted)';
    td.textContent = t('common.noResults');
    row.appendChild(td);
    tbody.appendChild(row);
  } else {
    pageRows.forEach(rowData => {
      const row = document.createElement('tr');
      S.columns.forEach(col => {
        const td = document.createElement('td');
        const val = rowData[col];
        if (isMissing(val)) {
          td.innerHTML = '<span class="cell-null">null</span>';
        } else {
          const str = String(val);
          td.textContent = str.length > 60 ? str.slice(0, 57) + '…' : str;
          td.title = str;
          if (S.columnTypes[col] === 'numeric') td.classList.add('cell-num');
        }
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pag = document.getElementById('pagination');
  pag.innerHTML = '';
  if (totalPages <= 1) return;

  const addBtn = (label, page, disabled, active) => {
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (active ? ' active' : '');
    btn.textContent = label;
    btn.disabled = disabled;
    btn.setAttribute('aria-label', `Page ${label}`);
    if (!disabled) btn.addEventListener('click', () => { S.currentPage = page; renderTable(); });
    pag.appendChild(btn);
  };

  addBtn('‹', S.currentPage - 1, S.currentPage === 1, false);

  const range = paginationRange(S.currentPage, totalPages);
  range.forEach(item => {
    if (item === '…') {
      const span = document.createElement('span');
      span.textContent = '…';
      span.style.padding = '0 0.25rem';
      span.style.color = 'var(--text-muted)';
      pag.appendChild(span);
    } else {
      addBtn(item, item, false, item === S.currentPage);
    }
  });

  addBtn('›', S.currentPage + 1, S.currentPage === totalPages, false);
}

function paginationRange(current, total) {
  if (total <= 7) return Array.from({length: total}, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '…', total];
  if (current >= total - 3) return [1, '…', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '…', current - 1, current, current + 1, '…', total];
}

function renderColumnInfo() {
  const grid = document.getElementById('column-types-grid');
  grid.innerHTML = '';
  S.columns.forEach(col => {
    const type = S.columnTypes[col];
    const vals = S.data.map(r => r[col]);
    const missing = vals.filter(v => isMissing(v)).length;
    const unique = new Set(vals.filter(v => !isMissing(v))).size;

    const card = document.createElement('div');
    card.className = 'col-info-card';
    card.innerHTML = `
      <div class="col-name" title="${escapeHtml(col)}">${escapeHtml(col)}</div>
      <span class="type-badge type-${type}">${t(`common.${type}`)}</span>
      <div style="margin-top:.4rem;font-size:.78rem;color:var(--text-muted)">
        ${t('analyze.unique')}: ${unique} &nbsp;·&nbsp; ${t('analyze.missing2')}: ${missing}
      </div>`;
    grid.appendChild(card);
  });
}

// ── ANALYZE ───────────────────────────────────────────────────────
function renderAnalyze() {
  if (!S.data) return;
  document.getElementById('analyze-no-data').classList.add('hidden');
  document.getElementById('analyze-content').classList.remove('hidden');
  renderOverview();
  renderStats();
  renderCorrelation();
}

function renderOverview() {
  const rows = S.data.length;
  const cols = S.columns.length;
  const totalCells = rows * cols;
  const missingCount = S.data.reduce((sum, row) =>
    sum + S.columns.filter(c => isMissing(row[c])).length, 0);
  const missingPct = totalCells ? ((missingCount / totalCells) * 100).toFixed(1) : '0.0';

  // Duplicate detection
  const seen = new Set();
  let dupes = 0;
  S.data.forEach(row => {
    const key = JSON.stringify(row);
    if (seen.has(key)) dupes++;
    else seen.add(key);
  });

  const cards = [
    {label: t('analyze.rows'), value: rows.toLocaleString(), sub: ''},
    {label: t('analyze.cols'), value: cols.toLocaleString(), sub: ''},
    {label: t('analyze.missing'), value: missingPct + '%', sub: `${missingCount} cells`},
    {label: t('analyze.duplicates'), value: dupes.toLocaleString(), sub: dupes > 0 ? '⚠️' : '✅'},
  ];

  const el = document.getElementById('overview-cards');
  el.innerHTML = cards.map(c => `
    <div class="overview-card">
      <div class="ov-label">${c.label}</div>
      <div class="ov-value">${c.value}</div>
      ${c.sub ? `<div class="ov-sub">${c.sub}</div>` : ''}
    </div>`).join('');
}

function renderStats() {
  const grid = document.getElementById('stats-grid');
  grid.innerHTML = '';

  S.columns.forEach(col => {
    const type = S.columnTypes[col];
    const vals = S.data.map(r => r[col]);
    const missing = vals.filter(v => isMissing(v)).length;
    const unique = new Set(vals.filter(v => !isMissing(v))).size;
    const badge = `<span class="type-badge type-${type}">${t(`common.${type}`)}</span>`;

    let rows = [];
    if (type === 'numeric') {
      const nums = getNumericValues(col).filter(v => v !== null);
      rows = [
        [t('analyze.mean'),   fmtN(mean(nums))],
        [t('analyze.median'), fmtN(median(nums))],
        [t('analyze.mode'),   mode(vals.filter(v => !isMissing(v)))],
        [t('analyze.std'),    fmtN(stdDev(nums))],
        [t('analyze.min'),    fmtN(Math.min(...nums))],
        [t('analyze.max'),    fmtN(Math.max(...nums))],
        [t('analyze.q1'),     fmtN(percentile(nums, 25))],
        [t('analyze.q3'),     fmtN(percentile(nums, 75))],
        [t('analyze.missing2'), `${missing} (${totalCells(vals, missing)}%)`],
        [t('analyze.unique'), unique],
      ];
    } else {
      rows = [
        [t('analyze.unique'), unique],
        [t('analyze.mode'),   mode(vals.filter(v => !isMissing(v)))],
        [t('analyze.missing2'), `${missing} (${totalCells(vals, missing)}%)`],
      ];
    }

    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `
      <div class="stat-card-header">
        <div class="stat-card-name" title="${escapeHtml(col)}">${escapeHtml(col)}</div>
        ${badge}
      </div>
      <div class="stat-rows">
        ${rows.map(([l, v]) => `
          <span class="stat-label">${l}</span>
          <span class="stat-value">${v}</span>`).join('')}
      </div>`;
    grid.appendChild(card);
  });
}

function totalCells(vals, missing) {
  return vals.length ? ((missing / vals.length) * 100).toFixed(1) : '0.0';
}

function renderCorrelation() {
  const numCols = S.columns.filter(c => S.columnTypes[c] === 'numeric');
  const section = document.getElementById('correlation-section');
  if (numCols.length < 2) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');

  const matrix = numCols.map(c1 =>
    numCols.map(c2 => {
      if (c1 === c2) return 1;
      const x = getNumericValues(c1);
      const y = getNumericValues(c2);
      return pearson(x, y);
    })
  );

  const isDark = S.theme === 'dark';
  const layout = {
    paper_bgcolor: isDark ? '#1e293b' : '#ffffff',
    plot_bgcolor:  isDark ? '#1e293b' : '#ffffff',
    font: {color: isDark ? '#f1f5f9' : '#0f172a', family: 'system-ui', size: 12},
    margin: {t: 20, r: 20, b: 80, l: 80},
    xaxis: {tickangle: -30},
  };

  const trace = {
    type: 'heatmap',
    z: matrix,
    x: numCols,
    y: numCols,
    colorscale: 'RdBu',
    reversescale: true,
    zmid: 0, zmin: -1, zmax: 1,
    text: matrix.map(row => row.map(v => v !== null ? v.toFixed(2) : 'N/A')),
    texttemplate: '%{text}',
    textfont: {size: 11},
    hovertemplate: '%{y} vs %{x}: %{text}<extra></extra>',
  };

  Plotly.react('correlation-matrix', [trace], layout, {responsive: true, displayModeBar: false});
}

// ── VISUALIZE ─────────────────────────────────────────────────────
function renderVisualize() {
  if (!S.data) return;
  document.getElementById('visualize-no-data').classList.add('hidden');
  document.getElementById('visualize-content').classList.remove('hidden');
  populateAxisSelects();
  renderAutoCharts();
}

function populateAxisSelects() {
  const xSel = document.getElementById('x-axis-select');
  const ySel = document.getElementById('y-axis-select');
  const cSel = document.getElementById('color-select');

  const buildOptions = (sel, cols, includeNone = false) => {
    const prev = sel.value;
    sel.innerHTML = '';
    if (includeNone) sel.add(new Option(t('viz.none'), ''));
    cols.forEach(c => sel.add(new Option(c, c)));
    if ([...sel.options].some(o => o.value === prev)) sel.value = prev;
  };

  buildOptions(xSel, S.columns);
  buildOptions(ySel, S.columns.filter(c => S.columnTypes[c] === 'numeric'));
  buildOptions(cSel, S.columns, true);

  if (!xSel.value && S.columns.length) xSel.value = S.columns[0];
  if (!ySel.value) {
    const numCols = S.columns.filter(c => S.columnTypes[c] === 'numeric');
    if (numCols.length) ySel.value = numCols[0];
  }

  updateAxisVisibility();
}

function updateAxisVisibility() {
  const noY = ['histogram', 'pie'];
  const show = !noY.includes(S.chartType);
  document.getElementById('y-axis-group').style.display = show ? '' : 'none';
}

function getPlotlyLayout(title = '') {
  const isDark = S.theme === 'dark';
  return {
    paper_bgcolor: isDark ? '#1e293b' : '#ffffff',
    plot_bgcolor:  isDark ? '#1e293b' : '#f8fafc',
    font: {color: isDark ? '#f1f5f9' : '#0f172a', family: 'system-ui', size: 12},
    margin: {t: title ? 50 : 30, r: 20, b: 80, l: 70},
    title: title ? {text: title, font: {size: 14}} : undefined,
    xaxis: {gridcolor: isDark ? '#334155' : '#e2e8f0', zerolinecolor: isDark ? '#475569' : '#cbd5e1'},
    yaxis: {gridcolor: isDark ? '#334155' : '#e2e8f0', zerolinecolor: isDark ? '#475569' : '#cbd5e1'},
    legend: {bgcolor: 'transparent'},
    hoverlabel: {font: {family: 'system-ui'}},
  };
}

function buildTraces(xCol, yCol, colorCol, type) {
  const data = S.data;
  const colorVals = colorCol ? [...new Set(data.map(r => r[colorCol]))] : [null];

  if (type === 'scatter') {
    return colorVals.map((cv, i) => {
      const rows = cv !== null ? data.filter(r => r[colorCol] === cv) : data;
      return {
        type: 'scatter', mode: 'markers',
        name: cv ?? xCol,
        x: rows.map(r => r[xCol]),
        y: rows.map(r => r[yCol]),
        marker: {color: COLORS[i % COLORS.length], size: 7, opacity: 0.75},
      };
    });
  }

  if (type === 'line') {
    return colorVals.map((cv, i) => {
      const rows = cv !== null ? data.filter(r => r[colorCol] === cv) : data;
      return {
        type: 'scatter', mode: 'lines+markers',
        name: cv ?? xCol,
        x: rows.map(r => r[xCol]),
        y: rows.map(r => Number(r[yCol])),
        line: {color: COLORS[i % COLORS.length]},
        marker: {color: COLORS[i % COLORS.length], size: 5},
      };
    });
  }

  if (type === 'bar') {
    return colorVals.map((cv, i) => {
      const rows = cv !== null ? data.filter(r => r[colorCol] === cv) : data;
      const agg = {};
      rows.forEach(r => {
        const x = r[xCol] ?? 'null';
        agg[x] = (agg[x] || 0) + (Number(r[yCol]) || 0);
      });
      return {
        type: 'bar',
        name: cv ?? yCol,
        x: Object.keys(agg),
        y: Object.values(agg),
        marker: {color: COLORS[i % COLORS.length]},
      };
    });
  }

  if (type === 'histogram') {
    return colorVals.map((cv, i) => {
      const rows = cv !== null ? data.filter(r => r[colorCol] === cv) : data;
      return {
        type: 'histogram',
        name: cv ?? xCol,
        x: rows.map(r => r[xCol]),
        marker: {color: COLORS[i % COLORS.length], opacity: 0.8},
      };
    });
  }

  if (type === 'pie') {
    const counts = {};
    data.forEach(r => { const v = String(r[xCol] ?? 'null'); counts[v] = (counts[v] || 0) + 1; });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 20);
    return [{
      type: 'pie',
      labels: sorted.map(([k]) => k),
      values: sorted.map(([, v]) => v),
      textinfo: 'label+percent',
      marker: {colors: COLORS},
    }];
  }

  if (type === 'box') {
    return colorVals.map((cv, i) => {
      const rows = cv !== null ? data.filter(r => r[colorCol] === cv) : data;
      return {
        type: 'box',
        name: cv ?? yCol,
        y: rows.map(r => Number(r[yCol])),
        marker: {color: COLORS[i % COLORS.length]},
        boxpoints: 'outliers',
      };
    });
  }

  return [];
}

function generateChart() {
  const xCol = document.getElementById('x-axis-select').value;
  const yCol = document.getElementById('y-axis-select').value;
  const colorCol = document.getElementById('color-select').value;
  if (!xCol) return;

  const layout = getPlotlyLayout();
  layout.xaxis.title = xCol;
  if (yCol) layout.yaxis.title = yCol;
  if (S.chartType === 'pie') { delete layout.xaxis; delete layout.yaxis; }
  if (colorCol) layout.barmode = 'group';

  try {
    const traces = buildTraces(xCol, yCol, colorCol || null, S.chartType);
    Plotly.react('chart-container', traces, layout, {responsive: true});
  } catch (e) { showToast(t('toast.error'), 'error'); }
}

function renderAutoCharts() {
  const grid = document.getElementById('auto-charts-grid');
  grid.innerHTML = '';

  const numCols = S.columns.filter(c => S.columnTypes[c] === 'numeric');
  const catCols = S.columns.filter(c => S.columnTypes[c] !== 'numeric');
  const layout  = () => { const l = getPlotlyLayout(); l.margin = {t:30,r:10,b:60,l:55}; return l; };
  const cfg = {responsive: true, displayModeBar: false};
  const autoId = n => `auto-chart-${n}`;

  let n = 0;

  // Histograms for numeric columns (up to 3)
  numCols.slice(0, 3).forEach(col => {
    const box = document.createElement('div');
    box.className = 'auto-chart-box';
    box.innerHTML = `<div id="${autoId(n)}" style="height:280px"></div>`;
    grid.appendChild(box);
    const id = autoId(n++);
    setTimeout(() => {
      const l = layout(); l.xaxis.title = col; l.yaxis.title = 'Count';
      const trace = {type: 'histogram', x: S.data.map(r => r[col]),
        marker: {color: COLORS[n % COLORS.length], opacity: 0.8}};
      Plotly.react(id, [trace], l, cfg);
    }, 0);
  });

  // Bar charts for categorical columns with ≤20 unique values (up to 3)
  catCols.filter(col => {
    const u = new Set(S.data.map(r => r[col]).filter(v => !isMissing(v))).size;
    return u >= 2 && u <= 20;
  }).slice(0, 3).forEach(col => {
    const counts = {};
    S.data.forEach(r => { const v = r[col] ?? 'null'; counts[v] = (counts[v] || 0) + 1; });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    const box = document.createElement('div');
    box.className = 'auto-chart-box';
    box.innerHTML = `<div id="${autoId(n)}" style="height:280px"></div>`;
    grid.appendChild(box);
    const id = autoId(n++);
    setTimeout(() => {
      const l = layout(); l.xaxis.title = col; l.yaxis.title = 'Count';
      const trace = {type: 'bar', x: sorted.map(([k]) => k), y: sorted.map(([, v]) => v),
        marker: {color: COLORS[n % COLORS.length]}};
      Plotly.react(id, [trace], l, cfg);
    }, 0);
  });

  // Scatter for first pair of numeric columns
  if (numCols.length >= 2) {
    const box = document.createElement('div');
    box.className = 'auto-chart-box';
    box.innerHTML = `<div id="${autoId(n)}" style="height:280px"></div>`;
    grid.appendChild(box);
    const id = autoId(n++);
    setTimeout(() => {
      const l = layout(); l.xaxis.title = numCols[0]; l.yaxis.title = numCols[1];
      const trace = {type: 'scatter', mode: 'markers',
        x: S.data.map(r => r[numCols[0]]), y: S.data.map(r => r[numCols[1]]),
        marker: {color: COLORS[0], size: 6, opacity: 0.65}};
      Plotly.react(id, [trace], l, cfg);
    }, 0);
  }

  if (n === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted);font-size:.9rem">No suitable columns for auto charts.</p>`;
  }
}

function downloadChart() {
  const el = document.getElementById('chart-container');
  if (!el.querySelector('.js-plotly-plot')) {
    showToast('Generate a chart first', 'info');
    return;
  }
  Plotly.downloadImage(el, {format: 'png', filename: 'datalens-chart', width: 1200, height: 700});
  showToast(t('toast.exported'), 'success');
}

// ── PROCESS ───────────────────────────────────────────────────────
function renderProcess() {
  if (!S.data) return;
  document.getElementById('process-no-data').classList.add('hidden');
  document.getElementById('process-content').classList.remove('hidden');
  populateProcessSelects();
  renderHistory();
  renderProcessStats();
}

function populateProcessSelects() {
  const selects = ['missing-col-select', 'rename-col-select', 'filter-col-select'];
  selects.forEach(id => {
    const el = document.getElementById(id);
    const prev = el.value;
    el.innerHTML = '';
    if (id === 'missing-col-select') el.add(new Option(t('process.allColumns'), '__all__'));
    S.columns.forEach(c => el.add(new Option(c, c)));
    if ([...el.options].some(o => o.value === prev)) el.value = prev;
  });
}

function saveHistory(name, detail) {
  S.history.push({
    name, detail,
    before: S.data.length,
    data: S.data.map(r => ({...r})),
    columns: [...S.columns],
    columnTypes: {...S.columnTypes},
    ts: new Date().toLocaleTimeString(),
  });
  if (S.history.length > 15) S.history.shift();
}

function renderHistory() {
  const el = document.getElementById('op-history');
  if (!S.history.length) {
    el.innerHTML = `<div class="history-empty">${escapeHtml(t('toast.noHistory'))}</div>`;
    return;
  }
  el.innerHTML = [...S.history].reverse().map(h => `
    <div class="history-item">
      <div class="hi-op">${escapeHtml(h.name)}</div>
      <div class="hi-detail">${escapeHtml(h.detail)}</div>
      <div class="hi-time">${h.ts} · ${h.before} → ${S.data.length} rows</div>
    </div>`).join('');
}

function renderProcessStats() {
  document.getElementById('process-stats').textContent =
    t('process.currentDataset', {r: S.data.length, c: S.columns.length});
}

function undo() {
  if (!S.history.length) { showToast(t('toast.noHistory'), 'info'); return; }
  const last = S.history.pop();
  S.data = last.data;
  S.columns = last.columns;
  S.columnTypes = last.columnTypes;
  showToast(t('toast.undone'), 'success');
  renderProcess();
}

function removeDuplicates() {
  const before = S.data.length;
  saveHistory('Remove Duplicates', '');
  const seen = new Set();
  S.data = S.data.filter(row => {
    const key = JSON.stringify(row);
    if (seen.has(key)) return false;
    seen.add(key); return true;
  });
  const removed = before - S.data.length;
  if (removed === 0) { S.history.pop(); showToast(t('toast.noDupes'), 'info'); }
  else showToast(t('toast.dupes', {n: removed}), 'success');
  renderProcess();
}

function handleMissing() {
  const col = document.getElementById('missing-col-select').value;
  const strategy = document.getElementById('missing-strategy').value;
  const fillVal = document.getElementById('fill-value-input').value;

  const cols = col === '__all__' ? S.columns : [col];
  saveHistory('Handle Missing', `strategy: ${strategy}`);

  if (strategy === 'remove') {
    S.data = S.data.filter(row => cols.every(c => !isMissing(row[c])));
  } else {
    cols.forEach(c => {
      let fill;
      if (strategy === 'mean') fill = fmtN(mean(getNumericValues(c).filter(v => v !== null)));
      else if (strategy === 'median') fill = fmtN(median(getNumericValues(c).filter(v => v !== null)));
      else if (strategy === 'mode') fill = mode(S.data.map(r => r[c]).filter(v => !isMissing(v)));
      else fill = fillVal;
      S.data.forEach(row => { if (isMissing(row[c])) row[c] = fill; });
    });
  }

  showToast(t('toast.missingDone'), 'success');
  renderProcess();
}

function renameColumn() {
  const col = document.getElementById('rename-col-select').value;
  const newName = document.getElementById('rename-new-name').value.trim();
  if (!newName || newName === col) { showToast('Enter a new name', 'info'); return; }
  if (S.columns.includes(newName)) { showToast('Column name already exists', 'error'); return; }

  saveHistory('Rename Column', `${col} → ${newName}`);
  S.data.forEach(row => { row[newName] = row[col]; delete row[col]; });
  const idx = S.columns.indexOf(col);
  S.columns[idx] = newName;
  S.columnTypes[newName] = S.columnTypes[col];
  delete S.columnTypes[col];

  document.getElementById('rename-new-name').value = '';
  showToast(t('toast.renamed', {n: newName}), 'success');
  renderProcess();
}

function filterRows() {
  const col = document.getElementById('filter-col-select').value;
  const op  = document.getElementById('filter-op').value;
  const val = document.getElementById('filter-value').value;

  saveHistory('Filter Rows', `${col} ${op} "${val}"`);
  const type = S.columnTypes[col];

  S.data = S.data.filter(row => {
    const cellStr = String(row[col] ?? '').trim();
    const cellNum = Number(row[col]);
    const valNum  = Number(val);

    if (op === 'eq')       return cellStr.toLowerCase() === val.toLowerCase();
    if (op === 'neq')      return cellStr.toLowerCase() !== val.toLowerCase();
    if (op === 'contains') return cellStr.toLowerCase().includes(val.toLowerCase());
    if (op === 'gt')       return type === 'numeric' ? cellNum > valNum : cellStr > val;
    if (op === 'lt')       return type === 'numeric' ? cellNum < valNum : cellStr < val;
    return true;
  });

  showToast(t('toast.filtered', {n: S.data.length}), 'success');
  renderProcess();
}

function addCalculatedColumn() {
  const colName = document.getElementById('calc-col-name').value.trim();
  const expr    = document.getElementById('calc-expression').value.trim();
  if (!colName || !expr) { showToast('Fill in column name and expression', 'info'); return; }

  saveHistory('Add Column', `${colName} = ${expr}`);

  // Build safe column name map: original → safe JS identifier
  const safeMap = {};
  S.columns.forEach(c => { safeMap[c] = '_c_' + c.replace(/[^a-zA-Z0-9]/g, '_'); });

  // Replace column names in expression (longest first)
  const sortedCols = [...S.columns].sort((a, b) => b.length - a.length);

  try {
    S.data = S.data.map(row => {
      let e = expr;
      sortedCols.forEach(c => {
        e = e.replace(new RegExp(escapeRegex(c), 'g'), safeMap[c]);
      });
      const args = S.columns.map(c => safeMap[c]);
      const vals = S.columns.map(c => {
        const v = row[c];
        return (!isMissing(v) && !isNaN(Number(v))) ? Number(v) : (v ?? null);
      });
      // eslint-disable-next-line no-new-func
      const fn = new Function(...args, `"use strict"; return (${e});`);
      const result = fn(...vals);
      return {...row, [colName]: result !== undefined ? result : null};
    });

    if (!S.columns.includes(colName)) {
      S.columns.push(colName);
      S.columnTypes[colName] = 'numeric';
    }

    document.getElementById('calc-col-name').value = '';
    document.getElementById('calc-expression').value = '';
    showToast(t('toast.calcAdded', {n: colName}), 'success');
  } catch (e) {
    S.history.pop();
    showToast(`${t('toast.error')}: ${e.message}`, 'error');
  }

  renderProcess();
}

function exportCSV() {
  const csv = Papa.unparse({fields: S.columns, data: S.data});
  const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `datalens-export-${Date.now()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t('toast.exported'), 'success');
}

// ── STATS MATH ───────────────────────────────────────────────────
function mean(nums) {
  if (!nums.length) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function median(nums) {
  if (!nums.length) return null;
  const s = [...nums].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function mode(arr) {
  if (!arr.length) return 'N/A';
  const freq = {};
  arr.forEach(v => { freq[String(v)] = (freq[String(v)] || 0) + 1; });
  const max = Math.max(...Object.values(freq));
  const modes = Object.keys(freq).filter(k => freq[k] === max);
  const label = modes.slice(0, 3).join(', ');
  return modes.length > 3 ? `${label}…` : label;
}

function stdDev(nums) {
  if (nums.length < 2) return null;
  const m = mean(nums);
  return Math.sqrt(nums.reduce((s, v) => s + (v - m) ** 2, 0) / (nums.length - 1));
}

function percentile(nums, p) {
  if (!nums.length) return null;
  const s = [...nums].sort((a, b) => a - b);
  const idx = (p / 100) * (s.length - 1);
  const lo = Math.floor(idx), hi = Math.ceil(idx);
  return lo === hi ? s[lo] : s[lo] + (s[hi] - s[lo]) * (idx - lo);
}

function pearson(xArr, yArr) {
  const pairs = xArr.map((x, i) => [x, yArr[i]]).filter(([a, b]) => a !== null && b !== null);
  if (pairs.length < 2) return null;
  const n = pairs.length;
  const mx = pairs.reduce((s, [a]) => s + a, 0) / n;
  const my = pairs.reduce((s, [, b]) => s + b, 0) / n;
  const cov = pairs.reduce((s, [a, b]) => s + (a - mx) * (b - my), 0);
  const sx  = Math.sqrt(pairs.reduce((s, [a]) => s + (a - mx) ** 2, 0));
  const sy  = Math.sqrt(pairs.reduce((s, [, b]) => s + (b - my) ** 2, 0));
  return sx && sy ? parseFloat((cov / (sx * sy)).toFixed(4)) : null;
}

// ── UI UTILITIES ─────────────────────────────────────────────────
function showLoading() { document.getElementById('loading-overlay').classList.remove('hidden'); }
function hideLoading() { document.getElementById('loading-overlay').classList.add('hidden'); }

function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icons = {success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️'};
  toast.innerHTML = `<span>${icons[type] || ''}</span> ${escapeHtml(msg)}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3500);
}

function fmtN(v) {
  if (v === null || v === undefined || isNaN(v)) return 'N/A';
  const n = Number(v);
  if (Number.isInteger(n)) return n.toLocaleString();
  return parseFloat(n.toFixed(4)).toLocaleString();
}

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[m]));
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── KEYBOARD SHORTCUTS ────────────────────────────────────────────
function initKeyboard() {
  document.addEventListener('keydown', e => {
    const tag = document.activeElement.tagName;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;

    if (e.key === '?' || (e.key === '/' && !e.ctrlKey)) {
      e.preventDefault();
      document.getElementById('kbd-modal').classList.toggle('hidden');
      return;
    }

    if (e.key === 'Escape') {
      document.getElementById('kbd-modal').classList.add('hidden');
      return;
    }

    if (e.key === 't' || e.key === 'T') { toggleTheme(); return; }

    const sectionMap = {'1':'import','2':'explore','3':'analyze','4':'visualize','5':'process'};
    if (sectionMap[e.key] && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      navigateTo(sectionMap[e.key]);
    }
  });

  document.getElementById('kbd-close').addEventListener('click', () => {
    document.getElementById('kbd-modal').classList.add('hidden');
  });

  document.getElementById('kbd-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('kbd-modal'))
      document.getElementById('kbd-modal').classList.add('hidden');
  });
}

// ── INIT ─────────────────────────────────────────────────────────
function init() {
  // Restore preferences
  const savedLang = localStorage.getItem('dl-lang');
  if (savedLang && TRANSLATIONS[savedLang]) {
    S.lang = savedLang;
    document.getElementById('lang-select').value = savedLang;
  }
  const savedTheme = localStorage.getItem('dl-theme');
  if (savedTheme) setTheme(savedTheme);

  applyTranslations();

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    const open = document.getElementById('nav-links').classList.toggle('open');
    document.getElementById('hamburger').setAttribute('aria-expanded', open);
  });

  // Nav links
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(a.dataset.section);
    });
  });

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Language selector
  document.getElementById('lang-select').addEventListener('change', e => {
    setLanguage(e.target.value);
  });

  // Drop zone
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');

  dropZone.addEventListener('click', () => fileInput.click());
  dropZone.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') fileInput.click(); });
  fileInput.addEventListener('change', () => { if (fileInput.files[0]) handleFile(fileInput.files[0]); });

  ['dragenter','dragover'].forEach(evt => {
    dropZone.addEventListener(evt, e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
  });
  ['dragleave','drop'].forEach(evt => {
    dropZone.addEventListener(evt, e => { e.preventDefault(); dropZone.classList.remove('drag-over'); });
  });
  dropZone.addEventListener('drop', e => {
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  });

  // Global drag-and-drop (whole page)
  document.addEventListener('dragover', e => e.preventDefault());
  document.addEventListener('drop', e => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && (file.name.endsWith('.csv') || file.name.endsWith('.txt') || file.name.endsWith('.tsv')))
      handleFile(file);
  });

  // Sample cards
  document.querySelectorAll('.sample-card').forEach(card => {
    card.addEventListener('click', () => loadSample(card.dataset.sample));
  });

  // Explore button (after file load)
  document.getElementById('explore-btn').addEventListener('click', () => navigateTo('explore'));

  // Page size
  document.getElementById('page-size').addEventListener('change', e => {
    S.pageSize = Number(e.target.value);
    S.currentPage = 1;
    if (S.data && S.section === 'explore') renderTable();
  });

  // Search
  let searchTimer;
  document.getElementById('search-input').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      S.searchText = e.target.value;
      S.currentPage = 1;
      if (S.data && S.section === 'explore') renderTable();
    }, 200);
  });

  // Chart type selector
  document.querySelectorAll('.chart-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chart-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      S.chartType = btn.dataset.type;
      updateAxisVisibility();
    });
  });

  // Visualize buttons
  document.getElementById('generate-chart-btn').addEventListener('click', generateChart);
  document.getElementById('download-chart-btn').addEventListener('click', downloadChart);

  // Process operations
  document.getElementById('remove-dupes-btn').addEventListener('click', removeDuplicates);
  document.getElementById('handle-missing-btn').addEventListener('click', handleMissing);
  document.getElementById('rename-col-btn').addEventListener('click', renameColumn);
  document.getElementById('filter-rows-btn').addEventListener('click', filterRows);
  document.getElementById('calc-col-btn').addEventListener('click', addCalculatedColumn);
  document.getElementById('export-csv-btn').addEventListener('click', exportCSV);
  document.getElementById('undo-btn').addEventListener('click', undo);

  // Show fill value input when strategy = value
  document.getElementById('missing-strategy').addEventListener('change', e => {
    document.getElementById('fill-value-input').classList.toggle('hidden', e.target.value !== 'value');
  });

  initKeyboard();
  loadVisitCounter();
}

function loadVisitCounter() {
  const el = document.getElementById('visit-counter');
  fetch('https://abacus.jasoncameron.dev/hit/datalens-leobonacini/visits')
    .then(res => res.json())
    .then(data => { el.textContent = `👁 ${data.value.toLocaleString()} visits`; })
    .catch(() => { el.textContent = '👁 — visits'; });
}

document.addEventListener('DOMContentLoaded', init);

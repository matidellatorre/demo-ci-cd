// export default function Home() {
// 	const companyName = "SmartTech"
// 	const companyDescription = "Transformando el futuro de la tecnología con IA"

// 	return (
		<div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
			{/* Navbar */}
			<nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex items-center">
							<span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{companyName}</span>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-8">
							<a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
								Características
							</a>
							<a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
								Precios
							</a>
							<a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
								Nosotros
							</a>
							<button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">Iniciar Sesión</button>
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<button className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section - Adjusted padding-top to account for navbar */}
			<div className="container mx-auto px-4 pt-32 pb-20">
				<div className="text-center space-y-8">
					<h1 className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 animate-fade-in">{companyName}</h1>
					<p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-up">{companyDescription}</p>
					<div className="flex justify-center gap-4">
						<button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105">Comenzar Ahora</button>
						<button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-all transform hover:scale-105">Ver Demo</button>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div id="features" className="container mx-auto px-4 py-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
						<div className="text-indigo-600 text-4xl mb-4">🚀</div>
						<h3 className="text-xl font-bold mb-2">Automatización Inteligente</h3>
						<p className="text-gray-600 dark:text-gray-300">Optimiza tus procesos con nuestra IA de última generación</p>
					</div>
					<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
						<div className="text-indigo-600 text-4xl mb-4">💡</div>
						<h3 className="text-xl font-bold mb-2">Análisis en Tiempo Real</h3>
						<p className="text-gray-600 dark:text-gray-300">Toma decisiones basadas en datos actualizados al instante</p>
					</div>
					<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
						<div className="text-indigo-600 text-4xl mb-4">🔒</div>
						<h3 className="text-xl font-bold mb-2">Seguridad Avanzada</h3>
						<p className="text-gray-600 dark:text-gray-300">Protección de datos de nivel empresarial</p>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div id="pricing" className="container mx-auto px-4 py-20">
				<div className="bg-indigo-600 rounded-2xl p-12 text-center text-white">
					<h2 className="text-4xl font-bold mb-4">¿Listo para transformar tu empresa?</h2>
					<p className="text-xl mb-8">Únete a más de 10,000 empresas que ya confían en {companyName}</p>
					<button className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">Solicitar Demo</button>
				</div>
			</div>

			{/* Footer */}
			<footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
				<p>© 2024 {companyName}. Todos los derechos reservados.</p>
			</footer>
		</div>
	)
}

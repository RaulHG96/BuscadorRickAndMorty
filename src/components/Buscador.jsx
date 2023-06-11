const Buscador = () => {
  return (
    <div className="absolute top-0 left-0 px-10 md:px-36 z-50 w-full h-full flex items-center">
			<div className="flex flex-col w-full">
				<p className="text-[#97ce4c] font-Horror text-5xl mb-3">
					Buscador
				</p>
				<form className="w-full flex gap-5">
					<input type="text" className="px-3 py-5 rounded-full text-black w-full text-xl" />
					<button className="bg-[#2a8a2c] text-white px-5 rounded-xl">
						<i className="fa-solid fa-magnifying-glass fa-2xl"></i>
					</button>
				</form>
				<p className="text-center text-[#97ce4c] font-Horror text-3xl mt-3">
					Versión 0.1.0
				</p>
			</div>
    </div>
  );
};

export default Buscador;

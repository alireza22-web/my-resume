export const Footer = ()=>{
  return ( 
    <div className="shadow-md bg-neutral-300 dark:bg-slate-900 dark:text-yellow-600">
      <footer className="p-8 flex justify-between items-center container mx-auto max-md:flex-col gap-y-6">
      <div>
        <p>© copyright Alireza Khoondabi</p>
      </div>
      <div className="flex gap-2">
        <a target="_blank" href="https://t.me/Alirkh090">
          <span>
            <img className="w-8 bg-white dark:bg-yellow-300 p-1 rounded-md" src="image/telegram.png" alt="" />
          </span>
        </a>
        <a target="_blank" href="mailto:alirezakhdb1383@gmail.com">
          <span>
            <img className="w-8 bg-white dark:bg-yellow-300 p-1 rounded-md" src="image/gmail.png" alt="" />
          </span>
        </a>
        <a target="_blank" href="tel:+989374266388">
          <span>
            <img className="w-8 bg-white dark:bg-yellow-300 p-1 rounded-md" src="image/call.png" alt="" />
          </span>
        </a>
      </div>
    </footer>
    </div>
  )
}
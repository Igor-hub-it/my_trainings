// Упражнения по Event Loop (браузер)
// Цель: предсказать порядок вывода. Запускайте блоки по одному.

// Подсказки:
// - Синхронный код выполняется сразу.
// - Микрозадачи: queueMicrotask, Promise.then/catch/finally.
// - Макрозадачи: setTimeout/setInterval, события, I/O и т.д.

// ===== Упражнение 1: базовый порядок =====
// Ожидайте порядок и затем раскомментируйте для проверки.
// Ожидаемый порядок (подумайте прежде чем смотреть):
// 1) sync-1, 2) sync-2, 3) micro-1, 4) micro-2, 5) macro-1
// (подсказка: все микрозадачи перед макрозадачами)
// -------------------------------------------------
// console.log('sync-1')
// setTimeout(() => console.log('macro-1 (setTimeout 0)'), 0)
// Promise.resolve().then(() => console.log('micro-1 (Promise.then)'))
// queueMicrotask(() => console.log('micro-2 (queueMicrotask)'))
// console.log('sync-2')

// sync1, sync2, mikro1, mikro2, makro


// ===== Упражнение 2: вложенность микрозадач внутри макрозадач =====
// Предскажите итоговый порядок перед запуском.
// -------------------------------------------------
// console.log('sync-a')
// setTimeout(() => {
//     console.log('macro-a start')
//     Promise.resolve().then(() => console.log('micro-in-macro-a'))
//     console.log('macro-a end')
// }, 0)
// Promise.resolve().then(() => {
//     console.log('micro-b start')
//     setTimeout(() => console.log('macro-from-micro-b'), 0)
//     console.log('micro-b end')
// })
// console.log('sync-b')

// sync-a, sync-b, micro-b start, macro-a start, macro-from-micro-b, micro-b end, micro-in-macro-a, macro-a end


// ===== Упражнение 3: несколько таймеров =====
// Какой будет порядок? Почему так?
// -------------------------------------------------
// setTimeout(() => console.log('t-0 #1'), 0)
// setTimeout(() => console.log('t-10'), 10)
// setTimeout(() => console.log('t-0 #2'), 0)

// #1 #2 10

// ===== Упражнение 4: цепочки микрозадач =====
// Обратите внимание на порядок then-ов и queueMicrotask между ними.
// -------------------------------------------------
// console.log('sync-x')//1
// Promise.resolve()
//   .then(() => {
//     console.log('micro-then-1')//3
//     queueMicrotask(() => console.log('micro-qm-between-1'))//5
//   })
//   .then(() => {
//     console.log('micro-then-2')//6
//   })
// queueMicrotask(() => console.log('micro-qm-outside'))//4
// console.log('sync-y')//2

//sync-x, sync-y, micro-then-1, micro-qm-between-1, micro-then-2, micro-then-2

// ===== Упражнение 5: MutationObserver как микрозадача (браузер) =====
// Этот блок работает, если есть DOM. В среде без DOM пропустите.
// Создаёт микрозадачу при изменении узла.
// -------------------------------------------------
// const el = document.createElement('div')
// const mo = new MutationObserver(() => {
//   console.log('micro (MutationObserver callback)')//3
// })
// mo.observe(el, { childList: true })
// console.log('sync-before-mutation')//1
// el.appendChild(document.createElement('span'))
// console.log('sync-after-mutation')//2


// ===== Упражнение 6: комбинированный сценарий =====
// Соберите в голове очередь: сначала весь sync, затем ВСЕ микрозадачи, затем макрозадачи FIFO.
// -------------------------------------------------
// console.log('S1')//1
// setTimeout(() => {
//   console.log('M1 start')//6
//   Promise.resolve().then(() => console.log('m(M1)-1'))//8
//   queueMicrotask(() => console.log('m(M1)-2'))//9
//   console.log('M1 end')//7
// }, 0)
// Promise.resolve().then(() => {
//   console.log('m-1')//3
//   setTimeout(() => console.log('M-from-m-1'), 0)//5
// })
// queueMicrotask(() => console.log('m-2'))//4
// console.log('S2')//2


// ===== Подсказка для самопроверки =====
// - Все синхронные логи идут первыми в порядке написания.
// - После синхронного кода выполняется пул МИКРОзадач до опустошения.
// - Затем берётся первая МАКРОзадача (например, setTimeout) и её колбэк выполняется.
// - Внутри макрозадачи новые микрозадачи ставятся в очередь и будут выполнены сразу ПОСЛЕ завершения текущей макрозадачи, но ДО следующей макрозадачи.


// ===== Упражнение 7: async/await как микрозадачи =====
// Подумайте о порядке перед запуском.
// -------------------------------------------------
// console.log('A-sync')//1
// async function run() {
//   console.log('A-async-start')//4/2
//   await null // ставит продолжение в микрозадачу
//   console.log('A-async-after-await')//5/4
//   Promise.resolve().then(() => console.log('A-then-inside-async'))//6
// }
// run()
// Promise.resolve().then(() => console.log('A-then-outside'))//3/5
// console.log('A-sync-end')//2/3

//
// // Ожидаемый порядок (запишите своё, затем проверьте):
// // A-sync, A-async-start, A-sync-end, A-then-outside, A-async-after-await, A-then-inside-async


// ===== Упражнение 8: каскад then и вложенные постановки =====
// Обратите внимание, когда планируются новые then и queueMicrotask.
// -------------------------------------------------

// console.log('B-sync')//1
// Promise.resolve()
//   .then(() => {
//     console.log('B-then-1')//3
//     Promise.resolve().then(() => console.log('B-then-1a'))//5
//     queueMicrotask(() => console.log('B-qm-1'))//6
//   })
//   .then(() => {
//     console.log('B-then-2')//7
//     queueMicrotask(() => console.log('B-qm-2'))//8
//   })
//   .then(() => {
//     console.log('B-then-3')//9
//   })
// queueMicrotask(() => console.log('B-qm-out'))//4
// console.log('B-sync-end')//2

//
// // Предскажите точный порядок всех B-* сообщений.


// ===== Упражнение 9: таймеры, микрозадачи и вложенность =====
// Проверьте, что микрозадачи из таймера выполняются ДО следующего таймера.
// -------------------------------------------------
// console.log('C-sync')//1
// setTimeout(() => {
//   console.log('C-timeout-1-start')//4
//   Promise.resolve().then(() => console.log('C-micro-in-timeout-1'))//6
//   queueMicrotask(() => console.log('C-qm-in-timeout-1'))//7
//   console.log('C-timeout-1-end')//5
// }, 0)
// setTimeout(() => {
//   console.log('C-timeout-2')//8
// }, 0)
// Promise.resolve().then(() => console.log('C-micro-outside'))//3
// console.log('C-sync-end')//2

//
// // Сформулируйте порядок перед запуском и сравните.


// ===== Упражнение 10: смешение await, then и таймера =====
// Подумайте, как смешиваются микрозадачи из await/then и макрозадачи setTimeout.
// -------------------------------------------------


// console.log('D-sync')//1
// async function task() {
//   console.log('D-async-start')//2
//   await Promise.resolve()
//   console.log('D-after-await')//5/4
//   setTimeout(() => console.log('D-timeout'), 0)//7
//   Promise.resolve().then(() => console.log('D-then-after-await'))//6
// }
// task()
// Promise.resolve().then(() => console.log('D-then-outside'))//4/5
// console.log('D-sync-end')//3


//
// // Запишите ожидаемый порядок перед проверкой на практике.


// ===== Упражнение 11: then внутри then и конкурирующие микрозадачи =====
// Проследите, когда каждая микрозадача попадает в очередь.
// -------------------------------------------------
// console.log('E-sync')//1
// Promise.resolve()
//   .then(() => {
//     console.log('E-then-1')//3
//     Promise.resolve()
//       .then(() => console.log('E-then-1a'))//5
//       .then(() => console.log('E-then-1b'))//7/8
//     queueMicrotask(() => console.log('E-qm-1'))//6
//   })
//   .then(() => {
//     console.log('E-then-2')//8/7
//   })
// queueMicrotask(() => console.log('E-qm-out'))//4
// console.log('E-sync-end')//2


// ===== Упражнение 12: макрозадача порождает несколько микрозадач и новую макрозадачу =====
// Убедитесь, что все микрозадачи первой макрозадачи завершаются до второй макрозадачи.
// -------------------------------------------------
// console.log('F-sync')//1
// setTimeout(() => {
//   console.log('F-timeout-1-start')//3
//   Promise.resolve().then(() => console.log('F-micro-1'))//5
//   queueMicrotask(() => console.log('F-qm-1'))//6
//   Promise.resolve().then(() => console.log('F-micro-2'))//7
//   setTimeout(() => console.log('F-timeout-2'), 0)//8
//   console.log('F-timeout-1-end')//4
// }, 0)
// console.log('F-sync-end')//2


// ===== Упражнение 13: смешение нескольких await и then =====
// Отслеживайте продолжения после каждого await.
// -------------------------------------------------
// console.log('G-sync')//1
// async function g() {
//   console.log('G-async-start')//2
//   await 0
//   console.log('G-after-await-1')//4
//   await Promise.resolve()
//   console.log('G-after-await-2')//5/6
// }
// g()
// Promise.resolve().then(() => console.log('G-then-out'))//6/5
// console.log('G-sync-end')//3


// ===== Упражнение 14: промисы, бросающие ошибку (catch как микрозадача) =====
// Проверьте порядок then/catch и микрозадач вне цепочки.
// -------------------------------------------------
// console.log('H-sync')//1
// Promise.resolve()
//   .then(() => {
//     console.log('H-then-1')//3
//     throw new Error('H-error')
//   })
//   .catch(() => {
//     console.log('H-catch')//5
//   })
//   .then(() => {
//     console.log('H-then-2-after-catch')//6
//   })
// queueMicrotask(() => console.log('H-qm-out'))//4
// console.log('H-sync-end')//2


// ===== Упражнение 15: тяжёлая синхронная работа блокирует таймер =====
// Заметьте, что таймер выполнится только после завершения синхронной блокировки.
// -------------------------------------------------
// console.log('I-sync')//1
// setTimeout(() => console.log('I-timeout'), 0)//3
// const start = Date.now()
// while (Date.now() - start < 50) {}
// console.log('I-sync-end')//2


// ===== Упражнение 16: звёздочка микрозадач (голодание макрозадач) =====
// Внимание: пример может задержать таймеры, увеличьте лимит и наблюдайте.
// -------------------------------------------------
// console.log('J-sync')//1
// let j = 0
// function scheduleMicro() {
//   if (j < 5) { // увеличьте до 100 и посмотрите задержку таймера
//     Promise.resolve().then(() => {
//       console.log('J-micro', ++j)//3/4/5/6/7
//       scheduleMicro()
//     })
//   }
// }
// scheduleMicro()
// setTimeout(() => console.log('J-timeout'), 0)//8
// console.log('J-sync-end')//2


// ===== Упражнение 17: resolved Promise vs new Promise =====
// Обратите внимание, когда колбэки попадают в очередь.
// -------------------------------------------------
// console.log('K-sync')//1
// Promise.resolve().then(() => console.log('K-then-resolved'))//3
// new Promise(r => r()).then(() => console.log('K-then-new-promise'))//4
// console.log('K-sync-end')//2


// ===== Упражнение 18: setInterval и микрозадачи внутри него =====
// Остановите интервал после пары тиков. Смотрите порядок внутри каждого тика.
// -------------------------------------------------
// console.log('L-sync')//1
// let lCount = 0
// const id = setInterval(() => {
//   console.log('L-interval-start', ++lCount)//3//7
//   Promise.resolve().then(() => console.log('L-micro-in-interval'))//5//9
//   queueMicrotask(() => console.log('L-qm-in-interval'))//6//10
//   console.log('L-interval-end', lCount)//4//8
//   if (lCount >= 2) clearInterval(id)
// }, 0)
// console.log('L-sync-end')//2


// ===== Упражнение 19: вложенные таймеры и микрозадачи в каждом =====
// Микрозадачи из первого таймера должны выполниться до второго таймера.
// -------------------------------------------------
// console.log('M-sync')//1
// setTimeout(() => {
//   console.log('M-t1-start')//3
//   Promise.resolve().then(() => console.log('M-t1-micro'))//5
//   console.log('M-t1-end')//4
//   setTimeout(() => {
//     console.log('M-t2-start')//7
//     queueMicrotask(() => console.log('M-t2-qm'))//9
//     console.log('M-t2-end')//8
//   }, 0)
// }, 0)
// console.log('M-sync-end')//2


// ===== Упражнение 20: две независимые цепочки промисов =====
// Отслеживайте очередность then-ов из разных цепочек + queueMicrotask.
// -------------------------------------------------
// console.log('N-sync')//1
// const p1 = Promise.resolve('N1')
// const p2 = Promise.resolve('N2')
// p1.then(v => { console.log('N-p1-then-1', v); return v })//6
//   .then(v => console.log('N-p1-then-2', v))//8
// p2.then(v => { console.log('N-p2-then-1', v); return v })//7
//   .then(v => console.log('N-p2-then-2', v))//9
// queueMicrotask(() => console.log('N-qm'))//5
// console.log('N-sync-end')//2

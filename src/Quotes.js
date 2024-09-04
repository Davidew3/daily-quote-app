
const quotes = [
  {
    text:'"Every noble work is at first impossible."',
    author:'~ Thomas Carlyle'
  },
  {
    text:'"Believe you can and you are halfway there."',
    author:'~ Teddy Roosevelt'
  },
  {
    text:'"Life is 10% what happens to us and 90% how we react to it."',
    author:'~ Dennis P. Kimbro'
  },
  {
    text:'"An obstacle is often a stepping stone."',
    author:'~ William Prescott'
  },
  {
    text:'"There is nothing impossible to they who will try."',
    author:'~ Alexander the Great'
  },
  {
    text:'"Whether you think you can or think you cannot, you are right."',
    author:'~ Henry Ford'
  },
  {
    text:'"The journey of a thousand miles begins with one step."',
    author:'~ Lao Tzu'
  },
  {
    text:'"May your choices reflect your hopes, not your fears."',
    author:'~ Nelson Mandela'
  },
  {
    text:'"Dont wait, the time will never be just right."',
    author:'~ Napoleon Hill'
  },
  {
    text:'"Do it with passion, or not at all."',
    author:'~ Rosa Nouchette'
  },
  {
    text:'"In the middle of every difficulty lies opportunity."',
    author:'~ Albert Einstein'
  },
  {
    text:'"Everything you can imagine is real."',
    author:'~ Pablo Picasso'
  },
  {
    text:'"Whatever you are, be a good one."',
    author:'~ Abraham Lincoln'
  },
  {
    text:'"The power of imagination makes us infinite."',
    author:'~ John Muir'
  },
  {
    text:'"Live each day as if your life had just begun."',
    author:'~ Johann Wolfgang Von Goethe'
  },
  {
    text:'"All limitations are self-imposed."',
    author:'~ Oliver Wendell Holmes'
  },
  {
    text:'"Eighty percent of success is showing up."',
    author:'~ Woody Allen'
  },
  {
    text:'"Tough times never last, but tough people do."',
    author:'~ Robert Schuller'
  },
  {
    text:'"Never regret anything that made you smile."',
    author:'~ Mark Twain'
  },
  {
    text:'"Defeat is not bitter unless you swallow it."',
    author:'~ Joe Clark'
  },
  {
    text:'"Stay hungry, Stay foolish."',
    author:'~ Steve Jobs'
  },
  {
    text:'"Try to be a rainbow in someones cloud."',
    author:'~ Maya Angelou'
  },
  {
    text:'"Those at the top of the mountain didnt fall there."',
    author:'~ Marcus Washling'
  },
  {
    text:'"To be the best, you must be able to handle the worst."',
    author:'~ Wilson Kanadi'
  },
  {
    text:'"The real opportunity for success lies within the person and not in the job."',
    author:'~ Zig Ziglar'
  },
  {
    text:'"Believe that life is worth living, and your belief will help create the fact."',
    author:'~ William James'
  },
  {
    text:'"Man does not know what he is capable of until he is asked."',
    author:'~ Kofi Annan'
  },
  {
    text:'"Do not let what you cannot do interfere with what you can do."',
    author:'~ John Wooden'
  },
  {
    text:'"I am not a product of my circumstances. I am a product of my decisions."',
    author:'~ Stephen Covey'
  },
  {
    text:'"You must be the change you wish to see in the world."',
    author:'~ Mahatma Gandhi'
  },
  {
    text:'"Everything you have ever wanted is on the other side of fear."',
    author:'~ George Addair'
  },
  {
    text:'"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."',
    author:'~ Ralph Waldo Emerson'
  },
  {
    text:'"You are braver than you believe, stronger than you seem, and smarter than you think."',
    author:'~ A.A Milne'
  },
  {
    text:'"When I let go of what I am, I become what I might be."',
    author:'~ Lao Tzu'
  },
  {
    text:'"The great thing in this world is not so much where you stand, as in what direction you are moving."',
    author:'~ Oliver Wendell Holmes'
  },
  {
    text:'"Keep your face always toward the sunshine, and shadows will fall behind you."',
    author:'~ Walt Whitman'
  },
  {
    text:'"Weaknesses are just strengths in the wrong environment."',
    author:'~ Marianne Cantwell'
  },
  {
    text:'"The difference between a successful person and others is not lack of strength not a lack of knowledge but rather a lack of will."',
    author:'~ Vince Lombardi'
  },
  {
    text:'"Some men see things as they are and say why. I dream things that never were and say why not."',
    author:'~ George Bernard Shaw'
  },
  {
    text:'"Speak less than you know; have more than you show."',
    author:'~ William Shakespeare'
  },
  {
    text:'"Do not go where the path may lead, go instead where there is no path and leave a trail."',
    author:'~ Ralph Waldo Emerson'
  },
  {
    text:'"Many of lifes failures are experienced by people who did not realize how close they were to success when they gave up."',
    author:'~ Thomas Edison'
  },
  {
    text:'"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great makes you feel that you too can become great."',
    author:'~ Mark Twain'
  },
  {
    text:'"Mostly, the world sees you the way you see yourself."',
    author:'~ Lisa Nichols'
  },
  {
    text:'"When ordinary people decide to step out and be part of something big, that is when they become extraordinary."',
    author:'~ Brett Harris'
  },
  {
    text:'"A hero is someone who has given his or her life to something bigger than oneself."',
    author:'~ Joseph Campbell'
  },
  {
    text:'"The only way of finding the limits of the possible is by going beyond them into the impossible."',
    author:'~ Arthur C. Clarke'
  },
  {
    text:'"It always seems impossible until its done."',
    author:'~ Nelson Mandela'
  },
  {
    text:'"Nothing is impossible. The word itself says I-m possible!"',
    author:'~ Audrey Hepburn'
  },
  {
    text:'"Impossible is for the unwilling."',
    author:'~ John Keats'
  },
  {
    text:'"You are never too old to set another goal or to dream a new dream."',
    author:'~ Malala Yousafzai'
  },
  {
    text:'"There are two ways of spreading light: to be the candle or the mirror that reflects it."',
    author:'~ Edith Wharton'
  },
  {
    text:'"It is not where you came from. It is where you are going that counts."',
    author:'~ Ella Fitzgerald'
  },
  {
    text:'"Do not worry about failures, worry about the chances you miss when you do not even try."',
    author:'~ Jack Canfield'
  },
  {
    text:'"You can never cross the ocean until you have the courage to lose sight of the shore."',
    author:'~ André Gide'
  },
  {
    text:'"Even a mistake may turn out to be the one thing necessary to a worthwhile achievement."',
    author:'~ Henry Ford'
  },
  {
    text:'"The quickest way to double your money is to fold it over and put it back in your pocket."',
    author:'~ Will Rogers'
  },
  {
    text:'"There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures."',
    author:'~ Josiah Gilbert Holland'
  },
  {
    text:'"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."',
    author:'~ Confucius'
  },
  {
    text:'"All you need is the plan, the road map, and the courage to press on to your destination."',
    author:'~ Earl Nightingale'
  },
  {
    text:'"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    author:'~ Erma Bombeck'
  },
  {
    text:'"Do not judge each day by the harvest you reap but by the seeds that you plant."',
    author:'~ Robert Louis Stevenson'
  },
  {
    text:'"If opportunity does not knock, build a door."',
    author:'~ Milton Berle'
  },
  {
    text:'"A wise man will make more opportunities than he finds."',
    author:'~ Francis Bacon'
  },
  {
    text:'"It is never too late to be what you might have been."',
    author:'~ George Eliot'
  },
  {
    text:'"There are no shortcuts to any place worth going."',
    author:'~ Beverly Sills'
  },
  {
    text:'"Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending."',
    author:'~ Carl Bard'
  },
  {
    text:'"Enjoy the little things, for one day you may look back and realize they were the big things."',
    author:'~ Robert Breault'
  },
  {
    text:'"The best preparation for tomorrow is doing your best today."',
    author:'~ H. Jackson Brown, Jr.'
  },
  {
    text:'"Your worth consists in what you are and not in what you have."',
    author:'~ ,Thomas Edison'
  },
  {
    text:'"Ambition is the path to success. Persistence is the vehicle you arrive in."',
    author:'~ Bill Bradley'
  },
  {
    text:'"Yesterday is not ours to recover, but tomorrow is ours to win or lose."',
    author:'~ Lyndon B. Johnson'
  },
  {
    text:'"To know oneself, one should assert oneself."',
    author:'~ Albert Camus'
  },
  {
    text:'"If you do not like the road you are walking, start paving another one."',
    author:'~ Dolly Parton'
  },
  {
    text:'"Never let your sense of morals prevent you from doing what is right."',
    author:'~ Isaac Asimov'
  },
  {
    text:'"It is not in the stars to hold our destiny but in ourselves."',
    author:'~ William Shakespeare'
  },
  {
    text:'"You have to be where you are to get where you need to go."',
    author:'~ Amy Poehler'
  },
  {
    text:'"Definiteness of purpose is the starting point of all achievement."',
    author:'~ W. Clement Stone'
  },
  {
    text:'"Action}, breeds inspiration more than inspiration breeds action."',
    author:'~ Willem Dafoe'
  },
  {
    text:'"You do not have to be great to start, but you have to start to be great."',
    author:'~ Zig Ziglar'
  },
  {
    text:'"The most difficult thing is the decision to act; the rest is merely tenacity."',
    author:'~ Amelia Earhart'
  },
  {
    text:'"Start where you are. Use what you have. Do what you can."',
    author:'~ Arthur Ashe'
  },
  {
    text:'"Even if you are on the right track, you will get run over if you just sit there."',
    author:'~ Will Rogers'
  },
  {
    text:'"Wake up with determination. Go to bed with satisfaction."',
    author:'~ George Horace Lorimer'
  },
  {
    text:'"Either you run the day, or the day runs you."',
    author:'~ Jim Rohn'
  },
  {
    text:'"Leave no stone unturned."',
    author:'~ Euripides'
  },
  {
    text:'"If not us, who? If not now, when?"',
    author:'~ John F. Kennedy'
  },
  {
    text:'"The bad news is time flies. The good news is you are the pilot."',
    author:'~ Michael Altshuler'
  },
  {
    text:'"Obsessed is just a word the lazy use to describe the dedicated."',
    author:'~ Russell Warren'
  },
  {
    text:'"It was not raining when Noah built the ark."',
    author:'~ Howard Ruff'
  },
  {
    text:'"To make any endeavor truly successful, integrity, inspiration, and insight are integral."',
    author:'~ Jagadish Vasudev'
  },
  {
    text:'"Inspiration is an awakening, a quickening of all mans faculties, and it is manifested in all high artistic achievements."',
    author:'~ Giacomo Puccini'
  },
  {
    text:'"Beauty arises out of human inspiration."',
    author:'~ Richard Dawkins'
  },
  {
    text:'"Inspiration can really strike from anywhere."',
    author:'~ Bobby Berk'
  },
  {
    text:'"No one was ever great without some portion of divine inspiration."',
    author:'~ Marcus Tullius Cicero'
  },
  {
    text: '“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”',
    author: '~ Albert Einstein'
  },
  {
    text: '“It is our choices, Harry, that show what we truly are, far more than our abilities.”',
    author: '~ J.K. Rowling'
  },
  {
    text: '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
    author: '~ Albert Einstein'
  },
  {
    text: '“Try not to become a man of success. Rather become a man of value.”',
    author: '~ Albert Einstein'
  },
  {
    text: '“It is better to be hated for what you are than to be loved for what you are not.”',
    author: '~ André Gide'
  },
  {
    text: "“I have not failed. I've just found 10,000 ways that won't work.”",
    author: '~ Thomas A. Edison'
  },
  {
    text: '“A day without sunshine is like, you know, night.”',
    author: '~ Steve Martin'
  },
  {
    text: '“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”',
    author: '~ J.K. Rowling'
  },
  {
    text: "“If you can't explain it to a six year old, you don't understand it yourself.”",
    author: '~ Albert Einstein'
  },
  {
    text: '“Life is what happens to us while we are making other plans.”',
    author: '~ Allen Saunders'
  },
  {
    text: '“For every minute you are angry you lose sixty seconds of happiness.”',
    author: '~ Ralph Waldo Emerson'
  },
  {
    text: '“If you judge people, you have no time to love them.”',
    author: '~ Mother Teresa'
  },
  {
    text: '“Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.”',
    author: '~ Garrison Keillor'
  },
  {
    text: '“It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
    author: '~ J.K. Rowling'
  },
  {
    text: '“Logic will get you from A to Z; imagination will get you everywhere.”',
    author: '~ Albert Einstein'
  },
  {
    text: "“The more that you read, the more things you will know. The more that you learn, the more places you'll go.”",
    author: '~ Dr. Seuss'
  },
  {
    text: '“The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.”',
    author: '~ Bob Marley'
  },
  {
    text: '“Not all of us can do great things. But we can do small things with great love.”',
    author: '~ Mother Teresa'
  },
  {
    text: '“Any fool can know. The point is to understand.”',
    author: '~ Albert Einstein'
  },
  {
    text: '“It is never too late to be what you might have been.”',
    author: '~ George Eliot'
  },
  {
    text: '“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”',
    author: '~ George R.R. Martin'
  },
  {
    text: '“Life is like riding a bicycle. To keep your balance, you must keep moving.”',
    author: '~ Albert Einstein'
  },
  {
    text: '“Only in the darkness can you see the stars.”',
    author: '~ Martin Luther King Jr.'
  },
  {
    text: '“It matters not what someone is born, but what they grow to be.”',
    author: '~ J.K. Rowling'
  },
  {
    text: '“Love does not begin and end the way we seem to think it does. Love is a battle, love is a war; love is a growing up.”',
    author: '~ James Baldwin'
  }
];

export default quotes;
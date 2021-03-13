var cardText = ["The Fool/Beginnings, innocence, spontaneity, a free spirit/Holding back, recklessness, risk-taking",                                                                    
                                           "The Magician/Manifestation, resourcefulness, power, inspired action/Manipulation, poor planning, untapped talents ",
                                           "The High Priestess/Intuition, sacred knowledge, divine feminine, the subconscious mind/Secrets, disconnected from intuition, withdrawal and silence     ",
                                           "The Empress/Femininity, beauty, nature, nurturing, abundance/Creative block, dependence on others ",
                                           "The Emperor/Authority, establishment, structure, a father figure/Domination, excessive control, lack of discipline, inflexibility ",
                                           "The Hierophant/Spiritual wisdom, religious beliefs, conformity, tradition,institutions/Personal beliefs, freedom, challenging the status quo   ",
                                           "The Lovers/( <3 )Love, harmony, relationships, values alignment, choices/Self-love, disharmony, imbalance, misalignment of values ",
                                           "The Chariot/Control, willpower, success, action, determination/Self-discipline, opposition, lack of direction ",
                                           "Strength/Strength, courage, persuasion, influence, compassion/Inner strength, self-doubt, low energy, raw emotion ",
                                           "The Hermit/Soul-searching, introspection, being alone, inner guidance/Isolation, loneliness, withdrawal ",
                                           "Wheel of Fortune/Good luck, karma, life cycles, destiny, a turning point/Bad luck, resistance to change, breaking cycles ",
                                           "Justice/Justice, fairness, truth, cause and effect, law/Unfairness, lack of accountability, dishonesty  ",
                                           "The Hanged Man/Pause, surrender, letting go, new perspectives/Delays, resistance, stalling, indecision   ",
                                           "Death/Endings, change, transformation, transition/Resistance to change, personal transformation, inner purging  ",
                                           "Temperance/Balance, moderation, patience, purpose/Imbalance, excess, self-healing, re-alignment         ",
                                           "The Devil/Shadow self, attachment, addiction, restriction, sexuality/Releasing limiting beliefs, exploring dark thoughts, detachment  ",
                                           "The Tower/Sudden change, upheaval, chaos, revelation, awakening/Personal transformation, fear of change, averting disaster   ",
                                           "The Star/Hope, faith, purpose, renewal, spirituality/Lack of faith, despair, self-trust, disconnection ",
                                           "The Moon/Illusion, fear, anxiety, subconscious, intuition/Release of fear, repressed emotion, inner confusion ",
                                           "The Sun/Positivity, fun, warmth, success, vitality/Inner child, feeling down, overly optimistic ",
                                           "Judgement/Judgement, rebirth, inner calling, absolution/Self-doubt, inner critic, ignoring the call  ",
                                           "The World/Completion, integration, accomplishment, travel/Seeking personal closure, short-cuts, delays ",
                                           "Ace of Wands/Inspiration, new opportunities, growth, potential/An emerging idea, lack of direction, distractions, delays  ",
                                           "Two of Wands/Future planning, progress, decisions, discovery/Personal goals, inner alignment, fear of unknown, lack of planning ",
                                           "Three of Wands/Progress, expansion, foresight, overseas opportunities/Playing small, lack of foresight, unexpected delays ",
                                           "Four of Wands/Celebration, joy, harmony, relaxation, homecoming/Personal celebration, inner harmony, conflict with others, transition ",
                                           "Five of Wands/Conflict, disagreements, competition, tension, diversity/Inner conflict, conflict avoidance, tension release ",
                                           "Six of Wands/Success, public recognition, progress, self-confidence/Private achievement, personal definition of success, fall from grace, egotism ",
                                           "Seven of Wands/Challenge, competition, protection, perseverance/Exhaustion, giving up, overwhelmed ",
                                           "Eight of Wands/Movement, fast paced change, action, alignment, air travel/Delays, frustration, resisting change, internal alignment ",
                                           "Nine of Wands/Resilience, courage, persistence, test of faith, boundaries/Inner resources, struggle, overwhelm, defensive, paranoia ",
                                           "Ten of Wands/Burden, extra responsibility, hard work, completion/Doing it all, carrying the burden, delegation, release ",
                                           "Page of Wands/Inspiration, ideas, discovery, limitless potential, free spirit/Newly-formed ideas, redirecting energy, self-limiting beliefs, a spiritual path ",
                                           "Knight of Wands/Energy, passion, inspired action, adventure, impulsiveness/Passion project, haste, scattered energy, delays, frustration ",
                                           "Queen of Wands/Courage, confidence, independence, social butterfly, determination/Self-respect, self-confidence, introverted, re-establish sense of self ",
                                           "King of Wands/Natural-born leader, vision, entrepreneur, honour/Impulsiveness, haste, ruthless, high expectations ",
                                           "Ace of Cups/Love, new relationships, compassion, creativity/Self-love, intuition, repressed emotions ",
                                           "Two of Cups/Unified love, partnership, mutual attraction/Self-love, break-ups, disharmony, distrust ",
                                           "Three of Cups/Celebration, friendship, creativity, collaborations/Independence, alone time, hardcore partying, ‘three’s a crowd’ ",
                                           "Four of Cups/Meditation, contemplation, apathy, reevaluation/Retreat, withdrawal, checking in for alignment ",
                                           "Five of Cups/ Regret, failure, disappointment, pessimism/Personal setbacks, self-forgiveness, moving on ",
                                           "Six of Cups/Revisiting the past, childhood memories, innocence, joy/Living in the past, forgiveness, lacking playfulness ",
                                           "Seven of Cups/Opportunities, choices, wishful thinking, illusion/Alignment, personal values, overwhelmed by choices ",
                                           "Eight of Cups/Disappointment, abandonment, withdrawal, escapism/Trying one more time, indecision, aimless drifting, walking away ",
                                           "Nine of Cups/Contentment, satisfaction, gratitude, wish come true/Inner happiness, materialism, dissatisfaction, indulgence ",
                                           "Ten of Cups/Divine love, blissful relationships, harmony, alignment/Disconnection, misaligned values, struggling relationships ",
                                           "Page of Cups/Creative opportunities, intuitive messages, curiosity, possibility/New ideas, doubting intuition, creative blocks, emotional immaturity ",
                                           "Knight of Cups/Creativity, romance, charm, imagination, beauty/Overactive imagination, unrealistic, jealous, moody ",
                                           "Queen of Cups/Compassionate, caring, emotionally stable, intuitive, in flow/Inner feelings, self-care, self-love, co-dependency ",
                                           "King of Cups/Emotionally balanced, compassionate, diplomatic/Self-compassion, inner feelings, moodiness, emotionally manipulative ",
                                           "Ace of Swords/Breakthroughs, new ideas, mental clarity, success/Inner clarity, re-thinking an idea, clouded judgement ",
                                           "Two of Swords/Difficult decisions, weighing up options, an impasse, avoidance/Indecision, confusion, information overload, stalemate ",
                                           "Three of Swords/(Hayley's Favorite! )Heartbreak, emotional pain, sorrow, grief, hurt/( Hayley's Favorite! )Negative self-talk, releasing pain, optimism, forgiveness ",
                                           "Four of Swords/Rest, relaxation, meditation, contemplation, recuperation/Exhaustion, burn-out, deep contemplation, stagnation ",
                                           "Five of Swords/Conflict, disagreements, competition, defeat, winning at all costs/Reconciliation, making amends, past resentment ",
                                           "Six of Swords/Transition, change, rite of passage, releasing baggage/Personal transition, resistance to change, unfinished business ",
                                           "Seven of Swords/Betrayal, deception, getting away with something, acting strategically/Imposter syndrome, self-deceit, keeping secrets ",
                                           "Eight of Swords/Negative thoughts, self-imposed restriction, imprisonment, victim mentality/Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives ",
                                           "Nine of Swords/Anxiety, worry, fear, depression, nightmares/Inner turmoil, deep-seated fears, secrets, releasing worry ",
                                           "Ten of Swords/Painful endings, deep wounds, betrayal, loss, crisis/Recovery, regeneration, resisting an inevitable end ",
                                           "Page of Swords/New ideas, curiosity, thirst for knowledge, new ways of communicating/Self-expression, all talk and no action, haphazard action, haste ",
                                           "Knight of Swords/Ambitious, action-oriented, driven to succeed, fast-thinking/Restless, unfocused, impulsive, burn-out ",
                                           "Queen of Swords/Independent, unbiased judgement, clear boundaries, direct communication/Overly-emotional, easily influenced, bitchy, cold-hearted ",
                                           "King of Swords/Mental clarity, intellectual power, authority, truth/Quiet power, inner truth, misuse of power, manipulation ",
                                           "Ace of Pentacles/A new financial or career opportunity, manifestation, abundance/Lost opportunity, lack of planning and foresight ",
                                           "Two of Pentacles/Multiple priorities, time management, prioritisation, adaptability/Over-committed, disorganisation, reprioritisation ",
                                           "Three of Pentacles/Teamwork, collaboration, learning, implementation/Disharmony, misalignment, working alone ",
                                           "Four of Pentacles/Saving money, security, conservatism, scarcity, control/Over-spending, greed, self-protection ",
                                           "Five of Pentacles/Financial loss, poverty, lack mindset, isolation, worry/Recovery from financial loss, spiritual poverty ",
                                           "Six of Pentacles/Giving, receiving, sharing wealth, generosity, charity/Self-care, unpaid debts, one-sided charity ",
                                           "Seven of Pentacles/Long-term view, sustainable results, perseverance, investment/Lack of long-term vision, limited success or reward ",
                                           "Eight of Pentacles/Apprenticeship, repetitive tasks, mastery, skill development/Self-development, perfectionism, misdirected activity ",
                                           "Nine of Pentacles/Abundance, luxury, self-sufficiency, financial independence/Self-worth, over-investment in work, hustling ",
                                           "Ten of Pentacles/Wealth, financial security, family, long-term success, contribution/The dark side of wealth, financial failure or loss ",
                                           "Page of Pentacles/Manifestation, financial opportunity, skill development/Lack of progress, procrastination, learn from failure ",
                                           "Knight of Pentacles/Hard work, productivity, routine, conservatism/Self-discipline, boredom, feeling ‘stuck’, perfectionism ",
                                           "Queen of Pentacles/Nurturing, practical, providing financially, a working parent/Financial independence, self-care, work-home conflict ",
                                           "King of Pentacles/Wealth, business, leadership, security, discipline, abundance/Financially inept, obsessed with wealth and status, stubborn" ];

class Tarot{
    constructor(name,description,flippedDescription)
    {
        this.name = name;
        this.description = description;
        this.flippedDescription = flippedDescription;
        this.isFlipped = false;
    }

    flip()
    {
        this.isFlipped = !this.isFlipped;
    }

    toString()
    {
        
        if (this.isFlipped)
            return this.name + "" + " [REVERSED] " + ": ("+this.flippedDescription+")";
        else
            return this.name + " : (" + this.description + ")";
    }
}

var deck = [];
for(var x = 0; x < cardText.length; x++)
{
    var parts = cardText[x].split('/');
    deck[x] = (new Tarot(parts[0], parts[1], parts[2]));
}

function Shuffle(){
    var currentIndex = deck.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    }

    for(var x = 0;x<deck.length;x++)
    {
        randomNum= Math.floor(Math.random() * 3); //1/3 chance
        if(randomNum == 0)
            deck[x].flip();
    }

    document.getElementById("output").innerHTML = `Tarot Deck Shuffled; [${deck.length}] cards moved!`;

}

function LookAtTopCard()
{
    document.getElementById("output").innerHTML = "Top Card  =  " + deck[0].toString();
}

function Spread(optionList)
{
    Shuffle();
    var cardSpread = "";
    for(var x = 0; x < optionList.length; x++)
    {
       cardSpread += optionList[x] + " = "+deck[x].toString()+"\n";
    }

    document.getElementById("output").innerHTML = cardSpread;
}

function CustomSpread()
{
    var val = window.prompt("How many cards?","0");
    
    Shuffle();
    var cardSpread = "";
    for(var x = 0; x < val; x++)
    {
       cardSpread += ((x+1) +" = "+deck[x].toString()+"\n");
    }

    document.getElementById("output").innerHTML = cardSpread;
}

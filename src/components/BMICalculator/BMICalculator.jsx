import { useState } from 'react';
import { Dumbbell, Apple } from 'lucide-react';
import './BMICalculator.css';

export default function BMICalculator() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);

  const heightInMeters = height / 100;
  const bmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(2));

  let category = 'Normal';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight': return '#3a86c8';
      case 'Normal': return '#4CAF50';
      case 'Overweight': return '#FFC107';
      case 'Obese': return '#FF5722';
      default: return '#FFFFFF';
    }
  };

  const getRecommendation = () => {
    switch (category) {
      case 'Underweight':
        return {
          exercise: "Focus on hypertrophy strength training 3-4 days a week. Keep cardio sessions short and focus on heavy compound lifts (squats, deadlifts) to build quality muscle mass.",
          nutrition: "Aim for a caloric surplus (300-500 kcal above maintenance). Prioritize nutrient-dense foods, lean proteins (chicken, fish, eggs), complex carbs, and healthy fats."
        };
      case 'Normal':
        return {
          exercise: "Maintain your balanced regimen! Mix 3 sessions of resistance training for muscular health with 2 sessions of cardiovascular/HIIT conditioning to optimize endurance.",
          nutrition: "Focus on a clean, high-protein maintenance diet. Ensure adequate protein intake (1.6g-2.0g per kg of bodyweight) alongside vegetables, fruits, and whole grains."
        };
      case 'Overweight':
        return {
          exercise: "Integrate full-body strength training 3 days a week with 2-3 sessions of metabolic conditioning or HIIT. Focus on consistent active movement throughout the day.",
          nutrition: "Aim for a slight caloric deficit (300-500 kcal below maintenance). Increase fiber intake, prioritize high-protein meals to preserve muscle, and reduce refined sugars."
        };
      case 'Obese':
        return {
          exercise: "Begin with low-impact exercises like brisk walking, stationary cycling, or swimming 4-5 days a week. Gradually incorporate light resistance training to support joints.",
          nutrition: "Commit to a controlled caloric deficit under guidance. Emphasize whole foods, lean proteins, high-fiber vegetables, and restrict processed carbs and sugary beverages."
        };
      default:
        return { exercise: '', nutrition: '' };
    }
  };

  const advice = getRecommendation();

  return (
    <div className="bmi-calculator-wrapper glassmorphic-card">
      <div className="bmi-input-section">
        <h3 className="bmi-card-title">Compute Your BMI</h3>
        
        {/* Height Slider */}
        <div className="bmi-slider-group">
          <div className="slider-label-row">
            <label htmlFor="bmi-height" style={{ cursor: 'pointer' }}>Height</label>
            <span className="slider-value">{height} <span className="unit">cm</span></span>
          </div>
          <input
            id="bmi-height"
            type="range"
            min="120"
            max="220"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
            className="bmi-range-slider"
          />
        </div>

        {/* Weight Slider */}
        <div className="bmi-slider-group">
          <div className="slider-label-row">
            <label htmlFor="bmi-weight" style={{ cursor: 'pointer' }}>Weight</label>
            <span className="slider-value">{weight} <span className="unit">kg</span></span>
          </div>
          <input
            id="bmi-weight"
            type="range"
            min="40"
            max="150"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            className="bmi-range-slider"
          />
        </div>
      </div>

      <div className="bmi-result-section">
        <div className="bmi-display-circle" style={{ borderColor: getCategoryColor() }}>
          <span className="bmi-number-label">BMI Value</span>
          <span className="bmi-number" style={{ color: getCategoryColor() }}>{bmi}</span>
          <span className="bmi-category" style={{ backgroundColor: getCategoryColor() + '20', color: getCategoryColor() }}>
            {category}
          </span>
        </div>

        {/* Recommendations */}
        <div className="bmi-recommendations">
          <div className="rec-box">
            <div className="rec-title">
              <Dumbbell size={16} className="rec-icon" />
              <span>Exercise Advice</span>
            </div>
            <p className="rec-text">{advice.exercise}</p>
          </div>

          <div className="rec-box">
            <div className="rec-title">
              <Apple size={16} className="rec-icon" />
              <span>Nutrition Advice</span>
            </div>
            <p className="rec-text">{advice.nutrition}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

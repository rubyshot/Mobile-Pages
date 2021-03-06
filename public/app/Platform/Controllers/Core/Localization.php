<?php 

namespace Platform\Controllers\Core;

use App\Http\Controllers;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class Localization extends \App\Http\Controllers\Controller {

    /**
     * Get locales
     *
     * @return \Symfony\Component\HttpFoundation\Response 
     */
    public static function getLocales($keyVal = false) {
        $locale = request('locale', config('system.default_language'));
        app()->setLocale($locale);

        // Get available locales
        $available_locales = \ResourceBundle::getLocales('');
        $all_locales = config('locales');

        $locales = [];
        foreach ($available_locales as $locale) {
          if (isset($all_locales[$locale])) {
            if ($keyVal) {
              $locales[$locale] = $all_locales[$locale];
            } else {
              $locales[] = [
                'label' => $all_locales[$locale],
                'value' => $locale
              ];
            }
          }
        }

        return response()->json($locales, 200);
    }

    /**
     * Get timezones
     *
     * @return \Symfony\Component\HttpFoundation\Response 
     */
    public static function getTimezones($keyVal = false) {
      $timezones = \DateTimeZone::listIdentifiers(\DateTimeZone::ALL);

      $response = [];
      foreach ($timezones as $timezone) {
        if ($keyVal) {
          $response[$timezone] = str_replace('_', ' ', $timezone);
        } else {
          $response[] = [
            'label' => str_replace('_', ' ', $timezone),
            'value' => $timezone
          ];
        }
      }
      return response()->json($response, 200);
    }

    /**
     * Get currencies
     *
     * @return \Symfony\Component\HttpFoundation\Response 
     */
    public static function getCurrencies($keyVal = false) {
      $locale = request('locale', config('system.default_language'));
      app()->setLocale($locale);

      $currencyRepository = new \CommerceGuys\Intl\Currency\CurrencyRepository;

      $currencies = $currencyRepository->getAll($locale);

      $response = [];

      foreach ($currencies as $currency_code => $currency) {
        if ($keyVal) {
          $response[$currency_code] = $currency->getName() . ' (' . $currency_code . ')';
        } else {
          $response[] = [
            'label' => $currency->getName() . ' (' . $currency_code . ')',
            'value' => $currency_code
          ];
        }
      }
      return response()->json($response, 200);
    }

    /**
     * Get date range
     * \Platform\Controllers\Core\Localization::getRange($date_start, $date_end);
     *
     * @return array
     */
    public static function getRange($strDateFrom, $strDateTo) {
      $aryRange = array();

      $iDateFrom = mktime(1, 0, 0, substr($strDateFrom, 5, 2), substr($strDateFrom, 8, 2), substr($strDateFrom, 0, 4));
      $iDateTo = mktime(1, 0, 0, substr($strDateTo, 5, 2), substr($strDateTo, 8, 2), substr($strDateTo, 0, 4));

      if ($iDateTo >= $iDateFrom) {
        $d = ['y' => (int) date('Y', $iDateFrom), 'm' => (int) date('n', $iDateFrom), 'd' => (int) date('j', $iDateFrom)];
        $aryRange[date('Y-m-d', $iDateFrom)] = $d; // first entry
        while ($iDateFrom < $iDateTo) {
          $iDateFrom +=86400; // add 24 hours
          $d = ['y' => (int) date('Y', $iDateFrom), 'm' => (int) date('n', $iDateFrom), 'd' => (int) date('j', $iDateFrom)];
          $aryRange[date('Y-m-d', $iDateFrom)] = $d;
        }
      }
      return $aryRange;
    }
}